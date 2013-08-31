@IF EXIST "%~dp0\node.exe" (
  "%~dp0\node.exe"  "%~dp0\..\pngquant-bin\bin\pngquant.js" %*
) ELSE (
  node  "%~dp0\..\pngquant-bin\bin\pngquant.js" %*
)