#!/bin/sh

yarn

cd lib
yarn
yarn link

cd ..
yarn link webterminal

yarn dev
