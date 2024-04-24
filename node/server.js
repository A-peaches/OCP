require("dotenv").config(); // 환경 변수 로드

const express = require("express");
const bcrypt = require("bcryptjs");
const multer = require("multer");
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
const storage = multer.memoryStorage(); // 메모리에 이미지를 저장
const upload = multer({ storage });

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
//메뉴 테이블 불러오기
app.get("/menu", (req, res) => {
  connection.query("SELECT * FROM menu", (error, results, fields) => {
    if (error) {
      console.error("Error fetching menu:", error);
      res.status(500).json({ error: "Error fetching menu" });
    } else {
      const responseData = results.map((row) => ({
        ...row,
        menuImg: row.menuImg ? row.menuImg.toString("base64") : null,
      }));
      res.setHeader("Content-Type", "application/json");
      res.status(200).json(responseData);
    }
  });
});
//메뉴삭제
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

// 메뉴추가
app.post("/menuinput", upload.single("menuImg"), (req, res) => {
  console.log;
  const {
    menuName,
    menuPrice,
    menuintro,
    category,
    beans,
    water,
    milk,
    sugar,
  } = req.body;
  const menuImg = req.file.buffer;

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
        const query = "SELECT * FROM menu WHERE menuid in (?)";
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
// 회원정보 DB insert
app.post("/join/signin", (req, res) => {
  let data = req.body;
  let userId = data.userId;
  let userPw = data.userPw;
  let userName = data.userName;
  let userNickName = data.userNickName;
  let email = data.email;
  let phone = data.phone;
  console.log(userId, userPw, userName, userNickName, email, phone);

  let query =
    "insert into userinfo (userId, userName, userPw, nickName, phone, email) values (?,?,?,?,?,?)";
  connection.query(
    query,
    [userId, userName, userPw, userNickName, phone, email],
    (err, result, fields) => {
      if (err) throw err;
      console.log(result);
    }
  );
});
/////////////////////////////////////////회원가입 프로세스/////////////////////////////////////////

/////////////////////////////////////////추천메뉴 Select /////////////////////////////////////////
app.get("/bestmenu/best", async (req, res) => {
  try {
    const results = await connection.query(
      "SELECT * FROM menus ORDER BY sales DESC LIMIT 4"
    );
    res.json(results.rows);
  } catch (err) {
    console.error("Error executing query", err.stack);
    res.status(500).send("Error fetching menus");
  }
});

// app.listen(port, () => {
//   console.log(`Server running on port ${port}`);
// });
/////////////////////////////////////////추천메뉴 Select /////////////////////////////////////////

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

app.post("/findid", async (req, res) => {
  const { inputPhone, inputEmail } = req.body;
  connection.query(
    "SELECT * FROM userinfo where phone=? and email=?",
    [inputPhone, inputEmail],
    async (error, results, fields) => {
      if (error) {
        console.error("database error :", error);
        res.status(500).send("Internal Server Error");
      } else {
        if (results.length > 0) {
          const userInfo = results[0];
          //결과가 있는경우
          res.json({
            success: true,
            message: "search successful",
            data: userInfo.userId,
          });
        } else {
          //없는경우
          res.json({
            success: false,
            message: "User not Found",
            data: "None",
          });
        }
      }
    }
  );
});
