#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

const targetDirs = [path.join(__dirname, '..', 'src')];
const isStrict = process.argv.includes('--strict');
let foundTodos = [];

function scanDir(dir) {
  if (!fs.existsSync(dir)) return;
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      scanDir(fullPath);
    } else if (/\.(tsx?|jsx?|json|css|md)$/i.test(entry.name)) {
      const content = fs.readFileSync(fullPath, 'utf8');
      const lines = content.split('\n');
      lines.forEach((line, index) => {
        // Exclude JSX template expressions like "[TODO: {alt}]" or "[TODO: ${...}]"
        if (line.includes('[TODO') && !line.includes('[TODO: {') && !line.includes('[TODO: ${')) {
          const relativePath = path.relative(path.join(__dirname, '..'), fullPath).replace(/\\/g, '/');
          foundTodos.push({
            file: relativePath,
            line: index + 1,
            text: line.trim()
          });
        }
      });
    }
  }
}

for (const dir of targetDirs) {
  scanDir(dir);
}

console.log('====================================================');
console.log(`[TODO CHECK] Found ${foundTodos.length} TODO placeholder(s) in codebase:`);
console.log('====================================================');

if (foundTodos.length === 0) {
  console.log('✓ No [TODO] placeholders found in production code.');
} else {
  // Group by file for clean reading
  const grouped = {};
  foundTodos.forEach((item) => {
    if (!grouped[item.file]) grouped[item.file] = [];
    grouped[item.file].push(item);
  });

  Object.keys(grouped).forEach((file) => {
    console.log(`\n📄 ${file}:`);
    grouped[file].forEach((item) => {
      console.log(`   Line ${item.line}: ${item.text}`);
    });
  });
}
console.log('\n====================================================');

if (isStrict && foundTodos.length > 0) {
  console.error(`\n❌ [STRICT CHECK FAILED]: ${foundTodos.length} unresolved [TODO] placeholder(s) found.`);
  console.error('Resolve all [TODO] items before deploying to production.\n');
  process.exit(1);
} else if (isStrict) {
  console.log('✓ Strict check passed: Clean to deploy!\n');
}
