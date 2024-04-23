require("dotenv").config(); // 환경 변수 로드

const express = require("express");
const bcrypt = require('bcryptjs');
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


app.post('/login', async (req,res)=> {
    const {inputId, inputPw } = req.body;

    connection.query('SELECT * FROM userinfo where userid = ?',
     [inputId],  async (error, results, fields) => {
        if(error){
            console.error('database error :', error);
            res.status(500).send('Internal Server Error');
        } else {
            if(results.length > 0) {
                const userInfo = results[0];
                const isMatch = inputPw == userInfo.userPw ? 1 : 0;
                if(isMatch) {
                    //비밀번호가 일치하는 경우 사용자 정보 제공
                    res.json({
                        success:true,
                        message:'Login successful',
                        data : userInfo
                    });
                } else {
                    //비밀번호가 일치하지 않는 경우
                    res.status(401).json({
                        success:false,
                        message: 'Invalid credentials'
                    });
                }
            } else {
                //결과가 없는 경우. 회원가입 할 것 
                res.status(404).json({
                    isAvailable : true,
                    message : 'User not found'
                });
            }
        }
    })

    
});