const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const mysql = require("mysql2");
const connection = mysql.createConnection({
  host: "118.37.94.80",
  port: 521,
  user: "root",
  password: "apeachgood",
  database: "pandacoffee",
});
connection.connect(); //db연결
app.use(cors()); // cors 설정
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.listen(3000, () => {
  console.log("node start");
});
app.get("/", (req, res) => {
  res.send("Hello");
});
