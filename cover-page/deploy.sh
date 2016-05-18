#!/bin/bash

echo "Running deploy script..."
shopt -s extglob

BASE_DIR=`dirname $BASH_SOURCE`

rm -Rfv $BASE_DIR/../!(cover-page|dev|photo|.git|.gitignore)
rm -Rf  $BASE_DIR/target/main.out
cp -Rv  $BASE_DIR/target/* $BASE_DIR/../

echo "DONE!"
