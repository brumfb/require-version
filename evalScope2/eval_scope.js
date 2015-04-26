var q = require('q');


module.exports.version = function() {
	var packageInfo = require('./package.json');
	return packageInfo.version;
}

module.exports.q = q;
