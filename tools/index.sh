#!/bin/sh

if [ -z $1 ]; then
echo "module名を指定して下さい。"
exit 0
fi

if [ -d src/modules/$1 ]; then
echo "$1 moduleは既に存在します。"
exit 0
fi

mkdir src/modules/$1
cp -r tools/module/* src/modules/$1/
find src/modules/$1/* -name "*.ts" |xargs sed -i "" "s/_module_/$1/g"

echo "$1 moduleを作成しました。"
find src/modules/$1/* -name "*.ts"
