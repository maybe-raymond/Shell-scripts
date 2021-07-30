#!/bin/bash

#compiles and runs my java code for me


javac $1
var=$(cut -d . -f 1 <<< $1)
java $var

