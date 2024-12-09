const fs = require('fs');
const path = require('path');

const srcDir = path.resolve(__dirname, 'src');
const indexFile = path.resolve(__dirname, 'index.js');

const plugins = fs.readdirSync(srcDir)
  .filter(file => file.endsWith('.js'));

const content = plugins.map(file => `import './src/${file}';`).join('\n');

fs.writeFileSync(indexFile, content);

console.log(`Generated index.js with ${plugins.length} plugins.`);

