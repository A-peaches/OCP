require("dotenv").config(); // 환경 변수 로드
<<<<<<< HEAD

=======
>>>>>>> 0c2eff3d2c4911c82e8a04e89a74c7053dec65da
const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const mysql = require("mysql2");
const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
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
