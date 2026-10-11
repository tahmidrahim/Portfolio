Add-Type -AssemblyName System.Drawing

$srcPath = "C:\Users\USER\.gemini\antigravity-ide\brain\f98d160f-7873-4f3f-84b1-4dca1f493ac9\.user_uploaded\media_1791686846433.jpg"
$bmp = [System.Drawing.Bitmap]::FromFile($srcPath)

# 4 columns across width 682
# Column widths:
# Col 1: x ~ 8 to 166
# Col 2: x ~ 176 to 336
# Col 3: x ~ 346 to 506
# Col 4: x ~ 516 to 676

# Row heights:
# Top header "1. Splash..." is around y=10-30
# Row 1 phones: y ~ 32 to 345
# Row 2 label: y ~ 355-375
# Row 2 phones: y ~ 375 to 690
# Row 3 label: y ~ 700-720
# Row 3 phones: y ~ 720 to 1000

function Crop-Image($source, $rect, $destPath) {
    $target = New-Object System.Drawing.Bitmap($rect.Width, $rect.Height)
    $g = [System.Drawing.Graphics]::FromImage($target)
    $g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
    $g.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
    $g.DrawImage($source, (New-Object System.Drawing.Rectangle(0, 0, $rect.Width, $rect.Height)), $rect, [System.Drawing.GraphicsUnit]::Pixel)
    $g.Dispose()
    $target.Save($destPath, [System.Drawing.Imaging.ImageFormat]::Png)
    $target.Dispose()
    Write-Host "Saved: $destPath"
}

# Ensure directory
New-Item -ItemType Directory -Force -Path "public/assets/barrera" | Out-Null

# Screen 4: Admin Dashboard (Row 1, Col 4)
$rectAdmin = New-Object System.Drawing.Rectangle(516, 32, 155, 318)
Crop-Image $bmp $rectAdmin "public/assets/barrera/admin-dashboard.png"

# Screen 3: Client Dashboard (Row 1, Col 3)
$rectClient = New-Object System.Drawing.Rectangle(348, 32, 155, 318)
Crop-Image $bmp $rectClient "public/assets/barrera/client-dashboard.png"

# Screen 6 or 7: Project Tracker (Row 2, Col 2: Project Details)
$rectProject = New-Object System.Drawing.Rectangle(180, 375, 155, 318)
Crop-Image $bmp $rectProject "public/assets/barrera/project-tracker.png"

# Screen 9: Material Selection (Row 3, Col 1: Material Selection)
$rectMaterial = New-Object System.Drawing.Rectangle(10, 720, 155, 290)
Crop-Image $bmp $rectMaterial "public/assets/barrera/material-selection.png"

$bmp.Dispose()
