Установка модулей
npm ci

Настройка
Добавить authtoken в ngrok.yml
добавить TOKEN: в pm2.config.js
При желании поменять порт в pm2.config.js, скрипте ngrok

Запуск
npm run pm2
npm run ngrok

Остановка
ctrl+c
npm run kill
