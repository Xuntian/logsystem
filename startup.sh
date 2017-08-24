#!/bin/bash

workdir=`pwd`

npl bootstrapper="script/apps/WebServer/WebServer.lua" port="8099" root="www/" dev="${workdir}" servermode="true"
