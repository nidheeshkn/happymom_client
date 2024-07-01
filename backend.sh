pm2 stop "happymom-server"
pm2 delete "happymom-server"
pm2 save
rm -rf happymom
git clone https://github.com/nidheeshkn/happymom.git
cd happymom
npm i
vim .env
EMAIL_USER=happymompms@gmail.com
EMAIL_PASS=nvzhdnqxnrebvntm
BASE_URL = https://happymom.com.in
pm2 start npm --name "happymom-server" -- start
pm2 save