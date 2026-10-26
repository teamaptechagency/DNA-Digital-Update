const fs = require('fs');
const data = JSON.parse(fs.readFileSync('figma-about-desktop.json', 'utf8'));
const root = data.nodes['893:7280'].document;
const texts = [];

function walk(node, depth) {
  if (node.type === 'TEXT') {
    const preview = node.characters.replace(/[\r\n]/g, '[NL]').substring(0, 250);
    texts.push('[' + node.style.fontSize + '/' + node.style.fontWeight + ']: ' + preview);
  }
  if (node.children) node.children.forEach(c => walk(c, depth + 1));
}

walk(root, 0);
fs.writeFileSync('about-texts.txt', texts.join('\n'), 'utf8');
console.log('Done:', texts.length, 'text nodes written to about-texts.txt');
