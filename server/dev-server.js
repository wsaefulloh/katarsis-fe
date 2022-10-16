require("dotenv").config(); // require dotenv
const cli = require("next/dist/cli/next-dev");

//untuk menjalankan next js pada host dan port sesuai .env
cli.nextDev(
  ["-p", process.env.PORT || 3001],
  ["-H", process.env.HOST || localhost]
);
