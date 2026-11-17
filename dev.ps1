$env:PATH = "D:\Athaya Akbar Ramdani\nodejs;$env:PATH"
$env:NODE_OPTIONS = "--max-old-space-size=1024"
$certSrc = "C:\Users\Athaya Ramdani\.gemini\antigravity\brain\e8f625a7-9d44-4a02-ab37-f04ed0c9764b\.user_uploaded\media_1794930308430_a9a0aae8.pdf"
$certDest = "$PSScriptRoot\public\certificates\synergy-of-symphony-mc-2026.pdf"
if (!(Test-Path $certDest) -and (Test-Path $certSrc)) {
    Copy-Item $certSrc $certDest -Force -ErrorAction SilentlyContinue
}
& "D:\Athaya Akbar Ramdani\nodejs\npm.cmd" run dev