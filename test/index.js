console.log('Mounted !');

const contentEl = document.createElement('div');
contentEl.innerHTML = require('../README.md');
document.body.appendChild(contentEl);