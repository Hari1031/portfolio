@echo off
setlocal
cd /d "%~dp0"
start "" /D "%~dp0backend" cmd /k mvnw.cmd spring-boot:run
start "" /D "%~dp0frontend" cmd /k "npm install && npm run dev"
exit /b 0
