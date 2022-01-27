module.exports = {
  apps: [
    {
      name: "node-red-lessons",
      script: "./node_modules/node-red/red.js",
      watch: false,
      node_args: "--max_old_space_size=1500",
      instances: 1,
      exec_mode: "cluster",
      autorestart: true,
      env: {
        NODE_ENV: "local",
        PORT: 1889,
        TOKEN: "",
        TELEGRAM_URL: "https://api.telegram.org",
      },
    },
  ],
};
