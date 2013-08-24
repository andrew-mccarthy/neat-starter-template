@IF EXIST "%~dp0\node.exe" (
  "%~dp0\node.exe"  "%~dp0\..\gifsicle\bin\gifsicle.js" %*
) ELSE (
  node  "%~dp0\..\gifsicle\bin\gifsicle.js" %*
)