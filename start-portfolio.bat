@echo off
setlocal
cd /d "%~dp0"
start "Portfolio Backend" cmd /k "cd /d "%~dp0backend" && mvnw.cmd spring-boot:run"
start "Portfolio Frontend" cmd /k "cd /d "%~dp0frontend" && npm install && npm run dev"
exit /b 0
