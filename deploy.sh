pm2 stop "happymom-client"
pm2 delete "happymom-client"
pm2 save
cd /var/www
rm -rf happymom
git clone https://github.com/Aswin-111/happymom
cd happymom
npm run build
pm2 start npm --name "happymom-client" -- start
pm2 save