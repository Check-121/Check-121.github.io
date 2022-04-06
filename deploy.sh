#!/usr/bin/env sh

set -e

yarn build

cd docs/.vuepress/dist

git init
git add -A
git commit -m 'deploy'

git push -f https://github.com/check121/check121.github.io.git master

cd -