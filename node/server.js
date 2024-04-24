require("dotenv").config(); // 환경 변수 로드

const express = require("express");
const bcrypt = require("bcryptjs");
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
app.get("/menu", (req, res) => {
  connection.query("SELECT * FROM menu", (error, results, fields) => {
    if (error) {
      console.error("Error fetching menu:", error);
      res.status(500).json({ error: "Error fetching menu" });
    } else {
      res.status(200).json(results);
    }
    res.end();
  });
});
app.post("/menudelete", (req, res) => {
  const { menuIds } = req.body; // 클라이언트에서 'menuIds'로 보낸 값을 받아옴
  console.log(menuIds);
  const query = "DELETE FROM menu WHERE menuid = (?)"; // IN 연산자를 사용하여 여러 id 값을 받아옴

  connection.query(query, [menuIds], (error, results) => {
    if (error) {
      console.error("메뉴 삭제 실패:", error);
      res.status(500).json({ error: "메뉴 삭제에 실패했습니다." });
    } else {
      console.log("메뉴 삭제 성공:", results);
      res.json({ message: "메뉴가 성공적으로 삭제되었습니다." });
    }
  });
});
app.post("/menuinput", (req, res) => {
  const {
    menuName,
    menuPrice,
    menuintro,
    category,
    beans,
    water,
    milk,
    sugar,
    menuImg,
  } = req.body;

  const query =
    "INSERT INTO menu (menuName, menuPrice, menuintro, category, beans, water, milk, sugar, menuImg) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)";

  connection.query(
    query,
    [
      menuName,
      menuPrice,
      menuintro,
      category,
      beans,
      water,
      milk,
      sugar,
      menuImg,
    ],
    (error, results) => {
      if (error) {
        console.error("메뉴 추가 실패:", error);
        res.status(500).json({ error: "메뉴 추가에 실패했습니다." });
      } else {
        const insertedMenuId = results.insertId;
        const query = "SELECT * FROM menu WHERE id = ?";
        connection.query(query, [insertedMenuId], (error, results) => {
          if (error) {
            console.error("새로운 메뉴 데이터 가져오기 실패:", error);
            res.status(500).json({
              error: "새로운 메뉴 데이터를 가져오는 데 실패했습니다.",
            });
          } else {
            const newMenu = results[0];
            console.log("메뉴 추가 성공:", newMenu);
            res.status(200).json(newMenu);
          }
        });
      }
    }
  );
});

app.post("/login", async (req, res) => {
  const { inputId, inputPw } = req.body;

  connection.query(
    "SELECT * FROM userinfo where userid = ?",
    [inputId],
    async (error, results, fields) => {
      if (error) {
        console.error("database error :", error);
        res.status(500).send("Internal Server Error");
      } else {
        if (results.length > 0) {
          const userInfo = results[0];
          const isMatch = inputPw == userInfo.userPw ? 1 : 0;
          if (isMatch) {
            //비밀번호가 일치하는 경우 사용자 정보 제공
            res.json({
              success: true,
              message: "Login successful",
              data: userInfo,
            });
          } else {
            //비밀번호가 일치하지 않는 경우
            res.status(401).json({
              success: false,
              message: "Invalid credentials",
            });
          }
        } else {
          //결과가 없는 경우. 회원가입 할 것
          res.status(404).json({
            isAvailable: true,
            message: "User not found",
          });
        }
      }
    }
  );
});
