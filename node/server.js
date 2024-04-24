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
        if (err) throw err;
        console.log(result);
    })
})
/////////////////////////////////////////회원가입 프로세스/////////////////////////////////////////



/////////////////////////////////////////추천메뉴 Select /////////////////////////////////////////
app.get('/bestmenu/best', async (req, res) => {
    try {
        const results = await connection.query('SELECT * FROM menus ORDER BY sales DESC LIMIT 4');
        res.json(results.rows);
    } catch (err) {
        console.error('Error executing query', err.stack);
        res.status(500).send('Error fetching menus');
    }
});

// app.listen(port, () => {
//   console.log(`Server running on port ${port}`);
// });
/////////////////////////////////////////추천메뉴 Select /////////////////////////////////////////

app.post('/login', async (req, res) => {
    const { inputId, inputPw } = req.body;
    connection.query('SELECT * FROM userinfo where userid = ?',
        [inputId], async (error, results, fields) => {
            if (error) {
                console.error('database error :', error);
                res.status(500).send('Internal Server Error');
            } else {
                if (results.length > 0) {
                    const userInfo = results[0];
                    const isMatch = inputPw == userInfo.userPw ? 1 : 0;
                    if (isMatch) {
                        //비밀번호가 일치하는 경우 사용자 정보 제공
                        res.json({
                            success: true,
                            message: 'Login successful',
                            data: userInfo
                        });
                    } else {
                        //비밀번호가 일치하지 않는 경우
                        res.status(401).json({
                            success: false,
                            message: 'Invalid credentials'
                        });
                    }
                } else {
                    //결과가 없는 경우. 회원가입 할 것
                    res.status(404).json({
                        isAvailable: true,
                        message: 'User not found'
                    })

                }
            }
        })
});


app.post('/findid', async (req, res) => {
    const { inputPhone, inputEmail } = req.body;
    connection.query('SELECT * FROM userinfo where phone=? and email=?',
        [inputPhone, inputEmail], async (error, results, fields) => {
            if (error) {
                console.error('database error :', error);
                res.status(500).send('Internal Server Error');
            } else {
                if (results.length > 0) {
                    const userInfo = results[0];
                    //결과가 있는경우 
                    res.json({
                        success: true,
                        message: 'search successful',
                        data: userInfo.userId
                    });
                } else {
                    //없는경우
                    res.json({
                        success: false,
                        message: 'User not Found',
                        data: 'None'
                    });
                }

            }
        }
    )
});

app.post('/orderState', async (req, res) => {
    const userId = req.body.userId;

    console.log(userId);
    const query = 'SELECT c.orderNo, c.orderDate, m.menuName, c.orderCnt, m.menuPrice FROM ( SELECT A.orderNo, A.orderDate, menuId, B.orderCnt, A.userId FROM userorder AS A LEFT OUTER JOIN orderdetail AS B ON A.orderNo =B.orderNo WHERE A.userId = ? AND A.orderDate = ( SELECT MAX(orderDate) FROM userorder WHERE userId = ? AND orderNo = A.orderNo ) ) AS c LEFT OUTER JOIN menu AS m ON c.menuId = m.menuId'

    connection.query(query, [userId, userId], async (error, results, fields) => {
        if (error) {
            console.error('database error :', error);
            res.status(500).send('Internal Server Error');
        } else {
            if (results.length > 0) {
                const userInfo = results;
                console.log(userInfo)
                //결과가 있는경우 
                res.json({
                    success: true,
                    data: userInfo
                });
            } else {
                //없는경우
                res.json({
                    success: false,
                    data: 'None'
                });
            }

        }
    }
    )
});

app.post('/orderList', async (req, res) => {
    const userId = req.body.userId;

    console.log(userId);
    const query = 'select orderNo,orderDate,menuName,orderCnt,menuPrice from (SELECT A.orderNo , orderDate, menuId, orderCnt,userId from userorder AS A left outer join orderdetail AS B on A.orderNo=B.orderNo) as c left outer join menu on c.menuId = menu.menuId where userId = ?'

    connection.query(query, [userId], async (error, results, fields) => {
        if (error) {
            console.error('database error :', error);
            res.status(500).send('Internal Server Error');
        } else {
            if (results.length > 0) {
                const userInfo = results;
                console.log(userInfo)
                //결과가 있는경우 
                res.json({
                    success: true,
                    data: userInfo
                });
            } else {
                //없는경우
                res.json({
                    success: false,
                    data: 'None'
                });
            }

        }
    }
    )
});


