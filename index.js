var jsxlate = require('jsxlate-loader');
var makeStringTransform = require('browserify-transform-tools').makeStringTransform;

module.exports = makeStringTransform('jsxlatify', {}, function(content, transformOptions, done) {
    done(null, jsxlate(content));
});
