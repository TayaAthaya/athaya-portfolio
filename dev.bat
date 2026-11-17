@echo off
set "PATH=D:\Athaya Akbar Ramdani\nodejs;%PATH%"
set "NODE_OPTIONS=--max-old-space-size=1024"
if not exist "%~dp0public\certificates\synergy-of-symphony-mc-2026.pdf" (
  copy /y "C:\Users\Athaya Ramdani\.gemini\antigravity\brain\e8f625a7-9d44-4a02-ab37-f04ed0c9764b\.user_uploaded\media_1794930308430_a9a0aae8.pdf" "%~dp0public\certificates\synergy-of-symphony-mc-2026.pdf" >nul 2>&1
)
call "D:\Athaya Akbar Ramdani\nodejs\npm.cmd" run dev