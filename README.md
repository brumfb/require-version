
require-version demonstrates the ability to require a version of the package as an extension to the existing require syntax.

usage:
```
	require('require-version');
	var pkg = require('pkg@version');
```

This expects the versions to be layed out like this:

```
	.../node_modules/pkg/1.0.0/...
	.../node_modules/pkg/2.0.0/...
```

Right now require-version only does exact version matches, but could incorporate semantic version matching by taking over more of the base require() by implementing similar logic to require.resolve().


### Setup

Right now this consists of two scoped libraries that represent different versions (evalScope 1.0.0 and evalScope 2.0.0).  To install the apps into node_modules use the powershells script: `install-packages.ps1`  

This will create a structure like this:
```
	node_modules/evalScope/1.0.0/...
	node_modules/evalScope/2.0.0/...
```


### Test app

running `node app.js` will use require-version's hijacked approach to resolve the various dependencies and run a few basic tests against it.


### Next

* Add ability to resolve by semantic versions
* Determine how to pair with npm install to produce proper node_modules structures
