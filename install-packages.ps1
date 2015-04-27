
# This is intended to simulate an
# alternate to the npm install option to force versions to the same 
# package directory under node_modules.  
# 
# This is for PoC, but we may want to consider finding a way to extend
# npm install to get the layout we want.
#

pushd evalScope1
npm install
popd

pushd evalScope2
npm install
popd

if (! (test-path "node_modules")) {
	mkdir node_modules
}

cp -Recurse evalScope1 node_modules\evalScope\1.0.0
cp -Recurse evalScope2 node_modules\evalScope\2.0.0
