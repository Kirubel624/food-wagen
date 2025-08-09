const express = require("express");
const cors = require("cors");
const app = express();
const routes = require("./routes");

app.use(express.static("/public"));
app.use(cors());
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true, limit: "10mb" }));

app.use("/api/v1", routes);

module.exports = app;
