var Module = require('module')
var path = require('path')
var baseRequire = module.constructor.prototype.require;

// Hijack base require 
module.constructor.prototype.require = function(request) {
	var versionedRequest = request.split('@')
	var newRequest = request

	console.log("Hijacked require called for %s", request);

	if (versionedRequest.length === 2) {
		newRequest = path.join(versionedRequest[0], versionedRequest[1]);
		console.log("---> Converting request from %s to %s", request, newRequest)
	}


	return baseRequire.apply(this, [newRequest]);
};


