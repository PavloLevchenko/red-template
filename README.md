Установка модулей
- npm ci

Настройка
- Добавить authtoken в ngrok.yml
- добавить TOKEN: в pm2.config.js
- При желании поменять порт в файле pm2.config.js и скрипте ngrok, он должен быть одинаков

Запуск
- npm run pm2
- npm run ngrok

Остановка
- ctrl+c
- npm run kill
