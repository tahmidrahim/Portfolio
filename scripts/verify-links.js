#!/usr/bin/env node
const http = require('http');
const fs = require('fs');
const path = require('path');

const OUT_DIR = path.join(__dirname, '..', 'out');
const PORT = 4123;

const mimeTypes = {
  '.html': 'text/html',
  '.js': 'text/javascript',
  '.css': 'text/css',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.txt': 'text/plain',
  '.xml': 'application/xml',
};

const server = http.createServer((req, res) => {
  let reqPath = req.url.split('?')[0].split('#')[0];
  if (reqPath === '/') reqPath = '/index.html';

  let filePath = path.join(OUT_DIR, reqPath);

  if (!fs.existsSync(filePath)) {
    if (fs.existsSync(filePath + '.html')) {
      filePath = filePath + '.html';
    } else if (fs.existsSync(path.join(filePath, 'index.html'))) {
      filePath = path.join(filePath, 'index.html');
    }
  }

  if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
    const ext = path.extname(filePath).toLowerCase();
    const contentType = mimeTypes[ext] || 'application/octet-stream';
    res.writeHead(200, { 'Content-Type': contentType });
    fs.createReadStream(filePath).pipe(res);
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('404 Not Found: ' + req.url);
  }
});

server.listen(PORT, async () => {
  console.log(`[VERIFY-LINKS] Static server running on port ${PORT}...`);

  const visited = new Set();
  const queue = ['/', '/work/business-management-remodeling-app'];
  const brokenLinks = [];
  const successfulLinks = [];
  const externalLinks = new Set();

  function fetchUrl(urlPath) {
    return new Promise((resolve) => {
      const fullUrl = `http://localhost:${PORT}${urlPath}`;
      http.get(fullUrl, (res) => {
        let data = '';
        res.on('data', (chunk) => (data += chunk));
        res.on('end', () => {
          resolve({ status: res.statusCode, body: data, path: urlPath });
        });
      }).on('error', (err) => {
        resolve({ status: 500, error: err.message, path: urlPath });
      });
    });
  }

  function extractAnchorLinks(html) {
    // Specifically extract <a> tags with href attributes
    const aRegex = /<a\s+[^>]*href=["']([^"']+)["']/gi;
    const links = [];
    let match;
    while ((match = aRegex.exec(html)) !== null) {
      const href = match[1];
      if (href.startsWith('http://') || href.startsWith('https://')) {
        externalLinks.add(href);
      } else if (
        !href.startsWith('mailto:') &&
        !href.startsWith('tel:') &&
        !href.startsWith('javascript:') &&
        !href.startsWith('wa.me')
      ) {
        // Internal page link: strip hash e.g. /#work -> /
        const cleanPath = href.split('#')[0] || '/';
        links.push({ raw: href, clean: cleanPath });
      }
    }
    return links;
  }

  while (queue.length > 0) {
    const current = queue.shift();
    if (visited.has(current)) continue;
    visited.add(current);

    const result = await fetchUrl(current);
    if (result.status === 200) {
      successfulLinks.push({ path: current, status: 200 });
      const internalLinks = extractAnchorLinks(result.body);
      for (const link of internalLinks) {
        if (!visited.has(link.clean) && !queue.includes(link.clean)) {
          queue.push(link.clean);
        }
      }
    } else {
      brokenLinks.push({ path: current, status: result.status });
    }
  }

  console.log('====================================================');
  console.log('[VERIFY-LINKS REPORT]:');
  console.log('====================================================');
  console.log(`✓ Successful internal routes verified (${successfulLinks.length}):`);
  successfulLinks.forEach((item) => {
    console.log(`   [200 OK] ${item.path}`);
  });

  console.log(`\n✓ External links detected & preserved (${externalLinks.size}):`);
  externalLinks.forEach((item) => {
    console.log(`   - ${item}`);
  });

  if (brokenLinks.length === 0) {
    console.log('\n✓ ZERO broken internal links! All internal routes resolve with 200 OK.');
  } else {
    console.log(`\n❌ Broken links found (${brokenLinks.length}):`);
    brokenLinks.forEach((item) => {
      console.log(`   [${item.status}] ${item.path}`);
    });
  }
  console.log('====================================================\n');

  server.close(() => {
    if (brokenLinks.length > 0) process.exit(1);
    process.exit(0);
  });
});
