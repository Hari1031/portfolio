@echo off
setlocal
set "MVN_DIR=C:\Tools\apache-maven-3.9.9"
if not exist "%MVN_DIR%\bin\mvn.cmd" (
  echo Maven is not installed yet. Downloading Maven to C:\Tools...
  if not exist "C:\Tools" mkdir "C:\Tools"
  powershell -NoProfile -ExecutionPolicy Bypass -Command "Invoke-WebRequest -UseBasicParsing -Uri 'https://archive.apache.org/dist/maven/maven-3/3.9.9/binaries/apache-maven-3.9.9-bin.zip' -OutFile 'C:\Tools\apache-maven-3.9.9-bin.zip'; Expand-Archive -Path 'C:\Tools\apache-maven-3.9.9-bin.zip' -DestinationPath 'C:\Tools' -Force"
)
if not exist "%MVN_DIR%\bin\mvn.cmd" (
  echo Failed to install Maven automatically.
  exit /b 1
)
"%MVN_DIR%\bin\mvn.cmd" %*
