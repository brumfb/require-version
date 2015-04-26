
pushd evalScope1
npm install
popd

pushd evalScope2
npm install
popd

if (! (test-path "node_modules")) {
	mkdir node_modules
}

cp -Recurse evalScope1 node_modules\evalScope@1.0.0
cp -Recurse evalScope2 node_modules\evalScope@2.0.0

