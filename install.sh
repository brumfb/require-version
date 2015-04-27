#!/bin/bash
set -e

pushd evalScope1
npm install
popd

mkdir -p node_modules/evalScope/1.0.0
cp -R evalScope1/* node_modules/evalScope/1.0.0

pushd evalScope2
npm install
popd

mkdir -p node_modules/evalScope/2.0.0
cp -R evalScope2/* node_modules/evalScope/2.0.0
