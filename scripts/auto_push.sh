#!/data/data/com.termux/files/usr/bin/bash

cd /storage/emulated/0/GitHub/ssc-cgl-warriors || exit

DATE=$(date '+%Y-%m-%d %H:%M:%S')

echo ""
echo "=============================="
echo " SSC CGL WARRIORS AUTO PUSH "
echo "=============================="
echo ""

git add .

git commit -m "Auto update $DATE"

git push origin main

echo ""
echo "Push completed successfully"
echo ""
