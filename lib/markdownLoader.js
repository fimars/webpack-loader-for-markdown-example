const marked = require('marked');
const { getOptions } = require('loader-utils');

module.exports = function (src) {
    const options = getOptions(this);
    return `import * as React from 'react';\n`
         + `import * as ReactDOM from 'react-dom';\n`
         + `export default class Markdown extends React.Component {`
         + `  render () { return <div>${marked(src)}</div> } `
         + `}`;
}
