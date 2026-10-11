const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
if (!fs.existsSync(chromePath)) {
  console.log('Chrome is not available at ' + chromePath);
  process.exit(1);
}

process.env.CHROME_PATH = chromePath;

console.log('Starting Lighthouse Audits using Chrome...');

try {
  // Desktop Audit
  console.log('Running Desktop Audit against http://localhost:3000...');
  execSync(
    `npx -y lighthouse http://localhost:3000 --chrome-flags="--headless" --output=json --output-path=lighthouse-desktop.json --preset=desktop --only-categories=accessibility,best-practices,seo,performance`,
    { stdio: 'inherit', env: process.env }
  );

  // Mobile Audit
  console.log('Running Mobile Audit against http://localhost:3000...');
  execSync(
    `npx -y lighthouse http://localhost:3000 --chrome-flags="--headless" --output=json --output-path=lighthouse-mobile.json --only-categories=accessibility,best-practices,seo,performance`,
    { stdio: 'inherit', env: process.env }
  );

  console.log('Lighthouse audits complete!');
} catch (err) {
  console.error('Lighthouse execution error:', err.message);
  process.exit(1);
}
