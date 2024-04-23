require("dotenv").config(); // 환경 변수 로드

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

app.use(express.json()); // JSON 데이터 파싱을 위해 필요


/////////////////////////////////////////회원가입 프로세스/////////////////////////////////////////

// 아이디 중복확인
app.get('/join/:userId', (req, res) => {
  const userId = req.params.userId;
  console.log('바보');
  connection.query('SELECT COUNT(*) AS count FROM userinfo WHERE userId = ?', [userId], (error, results, fields) => {
    if (error) {
      console.error('Database error:', error);
      res.status(500).send('Internal Server Error');
    } else {
      if (results[0].count > 0) {
        res.json({ isAvailable: false });
      } else {
        res.json({ isAvailable: true });
      }
    }
  });
});

// 회원정보 DB insert
app.post('/join/signin', (req, res) => {

  let data = req.body;
  let userId = data.userId;
  let userPw = data.userPw;
  let userName = data.userName;
  let userNickName = data.userNickName;
  let email = data.email;
  let phone = data.phone;

  console.log(userId, userPw, userName, userNickName, email, phone);

  let query = 'insert into userinfo (userId, userName, userPw, nickName, phone, email) values (?,?,?,?,?,?)';
  connection.query(query, [userId, userName, userPw, userNickName, phone, email], (err, result, fields) => {
      if(err) throw err;
      console.log(result);
  })
})

/////////////////////////////////////////회원가입 프로세스/////////////////////////////////////////