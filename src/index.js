const chalk = require("chalk");
const { PORT, HOST } = require("./config");
const app = require("./app");

const http = require("http");
const server = http.Server(app);

server.listen(PORT, HOST, () =>
  console.log(chalk.bold(`Server started @ http://${HOST}:${PORT}/`))
);
