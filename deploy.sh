#!/bin/bash
# 1. Ambil update terbaru
git pull origin main

# 2. Install & Build
npm install
npm run build

# 3. Sinkronisasi Gambar ke public_html (Otomatis)
echo "Syncing images..."
cp -r public/* ~/public_html/

# 4. Sinkronisasi CSS/JS ke public_html/_next
mkdir -p ~/public_html/_next
cp -r .next/static ~/public_html/_next/

# 5. Restart App (Khusus cPanel)
touch tmp/restart.txt
echo "Deploy selesai!"
