const { getOptions } = require('loader-utils');

module.exports = function (src) {
    const options = getOptions(this);
    console.log(src);
    return `module.exports = \`${src}\``
}