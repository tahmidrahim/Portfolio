Add-Type -AssemblyName System.Drawing

$srcPath = "C:\Users\USER\.gemini\antigravity-ide\brain\f98d160f-7873-4f3f-84b1-4dca1f493ac9\.user_uploaded\media_1791686846433.jpg"
$bmp = [System.Drawing.Bitmap]::FromFile($srcPath)

Write-Host "Image loaded: $($bmp.Width) x $($bmp.Height)"

# 682 width x 1024 height
# 4 columns, 3 rows of phones
# Let's verify coordinates
$bmp.Dispose()
