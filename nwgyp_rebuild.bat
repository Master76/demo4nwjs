@ECHO off

REM Change the working disk
%~d0

REM Change the working directory
cd %~dp0node_modules/canvas

REM Rebuild canvas
nw-gyp rebuild --target=0.17.0 --arch=x64

ECHO complete
