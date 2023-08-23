#!/usr/bin/env sh
# 發生錯誤時執行終止指令
set -e
# 打包編譯
rm -rf dist
npm run build
# 移動到打包資料夾下
cd dist
git init
git add .
git commit -m 'deploy'
# git push -f https://github.com/your_repo main:gh-pages
git push -f https://gitlab.com/your_repo main:gl-pages
cd -
