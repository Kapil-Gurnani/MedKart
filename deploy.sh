#!/bin/bash
ng build --prod --aot

aws s3 cp ./dist/myApp s3://myfrontend-kapil --recursive
