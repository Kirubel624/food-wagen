const dotenv = require("dotenv");
dotenv.config({
  path: "./.env",
});
const app = require("./app");
const http = require("http");
const { sequelize } = require("./models");

const PORT = process.env.PORT || 8000;

sequelize
  .authenticate()
  .then(() => {
    console.log("Database conneciton successful");
    const server = http.createServer(app);
    server.listen(8000, () => {
      console.log(`The server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.log("An error occured during connection:", err);
  });
