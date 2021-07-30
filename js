#!/bin/bash
#compiles and runs my java code for me

#Stops the script when it encounters an error
set -e

#Varibles 
fileName=$(cut -d . -f 1 <<< $1)

if [ -e $1 ]
then
	javac $1
	java $fileName

else
	template="public class ${fileName} {\n public static void main(String[] args){\n\t\tSystem.out.println('Hello world');\n\t}\n}\n"	
	echo -e $template >> $1
	vim $1

fi

