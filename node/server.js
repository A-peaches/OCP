require("dotenv").config(); // 환경 변수 로드

const express = require("express");
const bcrypt = require("bcryptjs");
const multer = require("multer");
const app = express();
const axios = require("axios");
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
app.use(express.json());
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
        menuimg: row.menuimg ? row.menuimg.toString("base64") : null,
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

app.use(express.json()); // JSON 데이터 파싱을 위해 필요

/////////////////////////////////////////회원가입 프로세스/////////////////////////////////////////
// 아이디 중복확인
app.get("/join/:userId", (req, res) => {
  const userId = req.params.userId;
  connection.query(
    "SELECT COUNT(*) AS count FROM userinfo WHERE userId = ?",
    [userId],
    (error, results, fields) => {
      if (error) {
        console.error("Database error:", error);
        res.status(500).send("Internal Server Error");
      } else {
        if (results[0].count > 0) {
          res.json({ isAvailable: false });
        } else {
          res.json({ isAvailable: true });
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
app.get("/menu", (req, res) => {
  connection.query("SELECT * FROM menu", (error, results, fields) => {
    if (error) {
      console.error("Error fetching menu:", error);
      res.status(500).json({ error: "Error fetching menu" });
    } else {
      const responseData = results.map((row) => ({
        ...row,
        menuimg: row.menuimg ? row.menuimg.toString("base64") : null,
      }));
      res.setHeader("Content-Type", "application/json");
      res.status(200).json(responseData);
    }
  });
});
app.get("/bestmenu/best", (req, res) => {
  connection.query(
    "SELECT m.menuId, m.menuName, m.menuPrice, m.menuintro ,SUM(o.ordercnt) AS total_orders, menuimg FROM menu m JOIN orderdetail o ON m.menuId = o.menuId GROUP BY m.menuId ORDER BY SUM(o.ordercnt) DESC LIMIT 4",
    (error, results, fields) => {
      if (error) {
        console.error("Error fetching menu:", error);
        res.status(500).json({ error: "Error fetching menu" });
      } else {
        const responseData = results.map((row) => ({
          ...row,
          menuimg: row.menuimg ? row.menuimg.toString("base64") : null,
        }));
        res.setHeader("Content-Type", "application/json");
        res.status(200).json(responseData);
      }
    }
  );
});

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

//////////////////////공지사항작성///////////////////
app.post("/noticewrite", (req, res) => {
  let data = req.body;
  let title = data.title;
  let content = data.content;

  let query = "insert into notice (title, content, is_event) value (?,?,?)";
  connection.query(query, [title, content, 0], (err, result, fields) => {
    if (err) throw err;
    // console.log(result);
  });
});

/////////////////////공지사항리스트생성//////////////////
app.get("/noticelist", (req, res) => {
  try {
    connection.query(
      "select * from notice order by noticeId desc",
      (error, results, fields) => {
        res.json(results);
      }
    );
  } catch (err) {
    console.error("Error executing query", err.stack);
    res.status(500).send("Error fetching menus");
  }
});

/////////////////////공지사항 세부사항 생성//////////////////

app.post("/noticedetail", (req, res) => {
  let data = req.body.noticeId;
  let query = "select title, content from notice where noticeId = ?";
  connection.query(query, [data], (err, result, fields) => {
    if (err) throw err;
    // console.log(result);
    res.json(result);
  });
});

/////////////////////전체메뉴 리스트 생성//////////////////
app.get("/allmenu", (req, res) => {
  try {
    connection.query("select * from menu", (error, results, fields) => {
      // console.log(results);
      res.json(results);
    });
  } catch (err) {
    console.error("Error executing query", err.stack);
    res.status(500).send("Error fetching menus");
  }
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

app.post("/orderState", async (req, res) => {
  const userId = req.body.userId;

  // console.log(userId);
  const query =
    "SELECT c.orderNo, c.orderDate, m.menuName, c.orderCnt, m.menuPrice FROM ( SELECT A.orderNo, A.orderDate, menuId, B.orderCnt, A.userId FROM userorder AS A LEFT OUTER JOIN orderdetail AS B ON A.orderNo =B.orderNo WHERE A.userId = ? AND A.orderDate = ( SELECT MAX(orderDate) FROM userorder WHERE userId = ? ) ) AS c LEFT OUTER JOIN menu AS m ON c.menuId = m.menuId order by c.orderDate desc";

  connection.query(query, [userId, userId], async (error, results, fields) => {
    if (error) {
      console.error("database error :", error);
      res.status(500).send("Internal Server Error");
    } else {
      if (results.length > 0) {
        const userInfo = results;
        // console.log(userInfo);
        //결과가 있는경우
        res.json({
          success: true,
          data: userInfo,
        });
      } else {
        //없는경우
        res.json({
          success: false,
          data: "None",
        });
      }
    }
  });
});

app.post("/orderList", async (req, res) => {
  const userId = req.body.userId;

  // console.log(userId);
  const query =
    "select orderNo,orderDate,menuName,orderCnt,menuPrice from (SELECT A.orderNo , orderDate, menuId, orderCnt,userId from userorder AS A left outer join orderdetail AS B on A.orderNo=B.orderNo) as c left outer join menu on c.menuId = menu.menuId where userId = ? order by orderDate desc";

  connection.query(query, [userId], async (error, results, fields) => {
    if (error) {
      console.error("database error :", error);
      res.status(500).send("Internal Server Error");
    } else {
      if (results.length > 0) {
        const userInfo = results;
        // console.log(userInfo);
        //결과가 있는경우
        res.json({
          success: true,
          data: userInfo,
        });
      } else {
        //없는경우
        res.json({
          success: false,
          data: "None",
        });
      }
    }
  });
});

// 상세메뉴
app.post("/detailmenu", (req, res) => {
  const menuId = req.body.menuId; // Extract menuId from the request body
  connection.query(
    "SELECT * FROM menu WHERE menuid = ?",
    [menuId],
    (error, results, fields) => {
      if (error) {
        console.error("Error fetching menu:", error);
        res.status(500).json({ error: "Error fetching menu" });
      }

      const responseData = results.map((row) => ({
        ...row,
        menuimg: row.menuimg ? row.menuimg.toString("base64") : null,
      }));
      console.log(responseData);
      res.setHeader("Content-Type", "application/json");
      res.status(200).json(responseData);
    }
  );
});
//////

/////////////////////장바구니 추가시 기존 데이터 존재 여부 확인//////////////////
app.post("/samecheck", (req, res) => {
  let data = req.body;
  let userId = data.userId;
  let menuId = data.menuId;

  let query =
    "select count(menuid) as count from cart where userid = ? and menuid = ?";

  connection.query(query, [userId, menuId], (err, result, fields) => {
    if (err) throw err;

    console.log(result[0].count);
    if (result[0].count > 0) {
      res.json({ exists: 1 }); // 결과가 있을 경우
    } else {
      res.json({ exists: 0 }); // 결과가 없을 경우
    }
  });
});

/////////////////////장바구니 추가시 첫추가 메뉴인경우//////////////////
app.post("/cartnew", (req, res) => {
  let data = req.body;
  let userId = data.userId;
  let menuId = data.menuId;

  let query = "insert into cart values (?, ?, 1)";

  connection.query(query, [userId, menuId], (err, result, fields) => {
    if (err) throw err;

    console.log(result);
  });
});

/////////////////////장바구니 추가시 중복 메뉴인경우//////////////////
app.post("/cartadd", (req, res) => {
  let data = req.body;
  let userId = data.userId;
  let menuId = data.menuId;

  let query =
    "update cart set cartCnt = (select cartCnt from (select * from cart where userid= ? and menuId= ? ) as cnt) + 1 where userid= ? and menuId= ?";

  connection.query(
    query,
    [userId, menuId, userId, menuId],
    (err, result, fields) => {
      if (err) throw err;

      console.log(result);
    }
  );
});

/////////////////////다중컵 요청 처리하기///////////////////////////////////////장바구니 추가시 첫추가 메뉴인경우//////////////////
app.post("/cartnewcups", (req, res) => {
  let data = req.body;
  let userId = data.userId;
  let menuId = data.menuId;
  let cups = data.cups;

  let query = "insert into cart values (?, ?, ?)";

  connection.query(query, [userId, menuId, cups], (err, result, fields) => {
    if (err) throw err;

    console.log(result);
  });
});

/////////////////////다중컵 요청 처리하기///////////////////////////////////////장바구니 추가시 중복 메뉴인경우//////////////////
app.post("/cartaddcups", (req, res) => {
  let data = req.body;
  let userId = data.userId;
  let menuId = data.menuId;
  let cups = data.cups;

  let query =
    "update cart set cartCnt = (select cartCnt from (select * from cart where userid= ? and menuId= ? ) as cnt) + ? where userid= ? and menuId= ?";

  connection.query(
    query,
    [userId, menuId, cups, userId, menuId],
    (err, result, fields) => {
      if (err) throw err;

      console.log(result);
    }
  );
});

app.post("/cartCnt", async (req, res) => {
  const userId = req.body.userId;

  console.log(userId);
  const query =
    "select count(menuName) as cartCnt from cart left outer join menu on cart.menuId = menu.menuId where userId=?";
  connection.query(query, [userId], async (error, results, fields) => {
    if (error) {
      console.error("database error :", error);
      res.status(500).send("Internal Server Error");
    } else {
      if (results.length > 0) {
        const cartCnt = results[0];
        console.log(cartCnt.data);
        //결과가 있는경우
        res.json({
          success: true,
          data: cartCnt,
        });
      } else {
        //없는경우
        res.json({
          success: false,
          data: "None",
        });
      }
    }
  });
});

app.post("/cartList", async (req, res) => {
  const userId = req.body.userId;

  console.log(userId);
  const query =
    "select cart.menuId,menuimg,menuName,cartCnt, menuPrice from cart left outer join menu on cart.menuId = menu.menuId where userId = ?";
  connection.query(query, [userId], async (error, results, fields) => {
    if (error) {
      console.error("database error :", error);
      res.status(500).send("Internal Server Error");
    } else {
      if (results.length > 0) {
        const cartList = results.map((row) => ({
          ...row,
          menuimg: row.menuimg ? row.menuimg.toString("base64") : null,
        }));
        //결과가 있는경우
        res.json({
          success: true,
          data: cartList,
        });
      } else {
        //없는경우
        res.json({
          success: false,
          data: "None",
        });
      }
    }
  });
});

//장바구니 개수감소
app.post("/decreaseCartCnt", async (req, res) => {
  const { userId, menuId, cartCnt } = req.body;
  const query = "UPDATE cart SET cartCnt = ? WHERE userId = ? AND menuId = ?";
  connection.query(
    query,
    [cartCnt, userId, menuId],
    async (error, results, fields) => {
      if (error) {
        console.error("database error :", error);
        res.status(500).send("Internal Server Error");
      } else {
        if (results.affectedRows > 0) {
          console.log(results);
          res.json({
            success: true,
          });
        } else {
          //없는경우
          res.json({
            success: false,
            data: "None",
          });
        }
      }
    }
  );
});

//개수증가
app.post("/increaseCartCnt", async (req, res) => {
  const { userId, menuId, cartCnt } = req.body;
  const query = "UPDATE cart SET cartCnt = ? WHERE userId = ? AND menuId = ?";
  connection.query(
    query,
    [cartCnt, userId, menuId],
    async (error, results, fields) => {
      if (error) {
        console.error("database error :", error);
        res.status(500).send("Internal Server Error");
      } else {
        if (results.affectedRows > 0) {
          console.log(results);
          res.json({
            success: true,
          });
        } else {
          //없는경우
          res.json({
            success: false,
            data: "None",
          });
        }
      }
    }
  );
});

//장바구니 삭제
app.post("/removeCartItem", async (req, res) => {
  const { userId, menuId } = req.body;
  console.log(userId, menuId);
  const query = "delete from cart WHERE userId = ? AND menuId = ?";
  connection.query(query, [userId, menuId], async (error, results, fields) => {
    if (error) {
      console.error("Database error during cart item deletion:", error);
      res.status(500).send("Internal Server Error");
    } else {
      if (results.affectedRows > 0) {
        res.json({ success: true, message: "Cart item deleted successfully." });
      } else {
        res.json({ success: false, message: "No cart item found to delete." });
      }
    }
  });
});

//마이페이지 유저정보 불러오기
app.post("/userInfoList", async (req, res) => {
  const userId = req.body.userId;

  console.log(userId);
  const query =
    "select userName, userId, nickName, phone, email from userinfo where userID = ?";
  connection.query(query, [userId], async (error, results, fields) => {
    if (error) {
      console.error("database error :", error);
      res.status(500).send("Internal Server Error");
    } else {
      const userInfo = results[0];
      res.json({
        success: true,
        data: userInfo,
      });
    }
  });
});

//재고 불러오기
app.get("/stock", (req, res) => {
  connection.query("SELECT * FROM stock", (error, results, fields) => {
    if (error) {
      console.error("Error fetching stock:", error);
      res.status(500).json({ error: "Error fetching stock" });
    } else {
      res.status(200).json(results);
    }
  });
});

//재고 입고량 추가
app.post("/stockupdate", (req, res) => {
  const { itemName, orderQuantity } = req.body;
  console.log(orderQuantity);
  // itemName에 따라 SQL 쿼리문 동적 생성
  let sql = "";
  switch (itemName) {
    case "원두":
      sql = `UPDATE stocks SET inStock = inStock + ${orderQuantity} WHERE stockName = '원두'`;
      break;
    case "물":
      sql = `UPDATE stocks SET inStock = inStock + ${orderQuantity} WHERE stockName = '물'`;
      break;
    case "우유":
      sql = `UPDATE stocks SET inStock = inStock + ${orderQuantity} WHERE stockName = '우유'`;
      break;
    case "시럽":
      sql = `UPDATE stocks SET inStock = inStock + ${orderQuantity} WHERE stockName = '시럽'`;
      break;
    default:
      res.status(400).json({ error: "잘못된 아이템 이름입니다." });
      return;
  }

  // SQL 쿼리 실행
  connection.query(sql, (err, result) => {
    if (err) {
      console.error("재고 업데이트 오류:", err);
      res.status(500).json({ error: "재고 업데이트에 실패했습니다." });
      return;
    }
    console.log(`${itemName} 재고 업데이트 완료`);
    res.status(200).json({ message: `${itemName} 재고 업데이트 완료` });
  });
});

/////////////////////////////주문로직/////////////////////////////

//주문번호 찾기
app.get("/findmyordernum", (req, res) => {
  connection.query(
    "select orderNo from userorder order by orderNo desc limit 1",
    (err, rows) => {
      if (err) throw err;
      if (rows[0]) {
        // console.log(rows[0]);
        res.json(rows[0]);
      } else {
        res.json({ orderNo: 0 });
      }
    }
  );
});

//주문번호추가
app.post("/adduserorder", (req, res) => {
  let data = req.body;
  let userId = data.userId;
  let orderNum = data.orderNum;

  let query =
    "insert into userorder (orderNo, userId, orderState) values (?, ?, ?)";
  connection.query(query, [orderNum, userId, 1], (err, result) => {
    if (err) {
      console.error("Error in user order insert:", err);
      res.status(500).json({ success: false, message: "Database error" });
      return; // 중요: 에러 발생 시 여기서 처리를 멈추고 클라이언트에게 응답
    }
    console.log("User order added:", result);
    res.json({
      success: true,
      message: "User order successfully added",
      data: result,
    });
    console.log("유저오더서버끝");
  });
});

//주문상세 추가
app.post("/addorderdetail", (req, res) => {
  let data = req.body;
  let userId = data.userId;
  let orderNum = data.orderNum;
  console.log("하이");
  console.log(userId, orderNum);

  let query =
    "INSERT INTO orderdetail (orderNo, menuId, orderCnt) SELECT ?, menuId, cartCnt FROM cart WHERE userId = ?";
  console.log(query);

  connection.query(query, [orderNum, userId], (err, result) => {
    if (err) {
      console.error("Error in user order insert:", err);
      res.status(500).json({ success: false, message: "Database error" });
      return; // 중요: 에러 발생 시 여기서 처리를 멈추고 클라이언트에게 응답
    }
    console.log("addorderdetail:", result);
    res.json({
      success: true,
      message: "addorderdetail complete",
      data: result,
    });
  });
});

app.post("/delcart", (req, res) => {
  let data = req.body;
  let userId = data.userId;

  let query = "delete from cart where userId = ?";
  console.log(query);

  connection.query(query, [userId], (err, result, fields) => {
    if (err) {
      console.error("Error in delete cart:", err);
      res.status(500).json({ success: false, message: "Database error" });
      return; // 중요: 에러 발생 시 여기서 처리를 멈추고 클라이언트에게 응답
    }
    console.log("delete cart:", result);
    res.json({ success: true, message: "delete cart complete", data: result });
  });
});

//매출 불러오기
app.get("/sales", (req, res) => {
  const query = `
SELECT
    DATE_FORMAT(userorder.orderDate, '%Y%m%d') AS orderDate,
    SUM(orderdetail.orderCnt * menu.menuPrice) AS dailySales,
    SUM(orderdetail.orderCnt * menu.menuPrice) -
        SUM(orderdetail.orderCnt * (menu.beans * 10 + menu.water * 2 + menu.milk * 2 + menu.sugar * 5)) AS dailyProfit,
    SUM(orderdetail.orderCnt) AS orderCnt
FROM
    userorder
LEFT JOIN
    orderdetail ON userorder.orderNo = orderdetail.orderNo
LEFT JOIN
    menu ON orderdetail.menuID = menu.menuID
GROUP BY
    DATE_FORMAT(userorder.orderDate, '%Y%m%d')
    order BY
    DATE_FORMAT(userorder.orderDate, '%Y%m%d');
  `;
  connection.query(query, (error, results, fields) => {
    if (error) {
      console.error("Error fetching daily sales:", error);
      res.status(500).send("Error fetching daily sales");
    } else {
      res.json(results);
    }
  });
});
//메뉴별 주문량 불러오기

app.get("/menucnt", (req, res) => {
  const query = `
SELECT m.menuName, SUM(od.orderCnt) AS totalOrders
FROM menu m
INNER JOIN orderDetail od ON m.menuId = od.menuId
GROUP BY m.menuName;
  `;
  connection.query(query, (error, results, fields) => {
    if (error) {
      console.error("Error fetching daily menucnt:", error);
      res.status(500).send("Error fetching daily menucnt");
    } else {
      res.json(results);
    }
  });
});

//재고사용량 추가
app.post("/stockchange", (req, res) => {
  let data = req.body;
  let orderNum = data.orderNum;

  let query = `UPDATE stock SET outStock = CASE 
                  WHEN stockName = '원두' THEN outStock + (SELECT SUM(m.beans * o.orderCnt) FROM orderdetail o JOIN menu m ON o.menuId = m.menuId WHERE o.orderNo = ?) 
                  WHEN stockName = '우유' THEN outStock + (SELECT SUM(m.milk * o.orderCnt) FROM orderdetail o JOIN menu m ON o.menuId = m.menuId WHERE o.orderNo = ?) 
                  WHEN stockName = '생수' THEN outStock + (SELECT SUM(m.water * o.orderCnt) FROM orderdetail o JOIN menu m ON o.menuId = m.menuId WHERE o.orderNo = ?)
                  WHEN stockName = '시럽' THEN outStock + (SELECT SUM(m.sugar * o.orderCnt) FROM orderdetail o JOIN menu m ON o.menuId = m.menuId WHERE o.orderNo = ?)
              END 
              WHERE stockName IN ('원두', '우유', '생수', '시럽')`;

  connection.query(
    query,
    [orderNum, orderNum, orderNum, orderNum],
    (err, result, fields) => {
      if (err) {
        console.error("Error in stockchange:", err);
        res.status(500).json({ success: false, message: "Database error" });
        return; // 중요: 에러 발생 시 여기서 처리를 멈추고 클라이언트에게 응답
      }
      console.log("stockchange:", result);
      res.json({
        success: true,
        message: "stockchange complete",
        data: result,
      });
    }
  );
});

///////////////////////유저관리페이지/////////////////////

app.get("/getuserlist", (req, res) => {
  console.log("유저정보 요청 도달"); //까지 ok

  try {
    connection.query("select * from userinfo", (error, results, fields) => {
      console.log("들어왔지롱");
      // res.json(results);
      res.status(200).json(results);
      console.log(results);
    });
  } catch (error) {
    console.error("Error executing query", error.stack);
    res.status(500).send("Error fetching menus");
  }
});

//재고 불러오기
app.get("/stock", (req, res) => {
  connection.query("SELECT * FROM stock", (error, results, fields) => {
    if (error) {
      console.error("Error fetching stock:", error);
      res.status(500).json({ error: "Error fetching stock" });
    } else {
      res.status(200).json(results);
    }
  });
});

app.post("/orderCoffee", (req, res) => {
  const updateBeans = req.body.updateBeans;

  let query = `UPDATE stock set inStock = ? WHERE stockName='원두';`;

  connection.query(query, [updateBeans], (err, result, fields) => {
    if (err) {
      console.error("database error :", err);
      res.status(500).send("Internal Server Error");
    } else {
      if (result.affectedRows > 0) {
        console.log("Updated rows:", result.affectedRows);
        res.json({
          success: true,
        });
      } else {
        //없는경우
        res.json({
          success: false,
          data: "None",
        });
      }
    }
  });
});

app.post("/orderMilk", (req, res) => {
  const updateMilk = req.body.updateMilk;

  let query = `UPDATE stock set inStock = ? WHERE stockName='우유';`;

  connection.query(query, [updateMilk], (err, result, fields) => {
    if (err) {
      console.error("database error :", err);
      res.status(500).send("Internal Server Error");
    } else {
      if (result.affectedRows > 0) {
        console.log("Updated rows:", result.affectedRows);
        res.json({
          success: true,
        });
      } else {
        //없는경우
        res.json({
          success: false,
          data: "None",
        });
      }
    }
  });
});

app.post("/orderWater", (req, res) => {
  const updateWater = req.body.updateWater;

  let query = `UPDATE stock set inStock = ? WHERE stockName='생수';`;

  connection.query(query, [updateWater], (err, result, fields) => {
    if (err) {
      console.error("database error :", err);
      res.status(500).send("Internal Server Error");
    } else {
      if (result.affectedRows > 0) {
        console.log("Updated rows:", result.affectedRows);
        res.json({
          success: true,
        });
      } else {
        //없는경우
        res.json({
          success: false,
          data: "None",
        });
      }
    }
  });
});

app.post("/orderSyrup", (req, res) => {
  const updateSyrup = req.body.updateSyrup;

  let query = `UPDATE stock set inStock = ? WHERE stockName='시럽';`;

  connection.query(query, [updateSyrup], (err, result, fields) => {
    if (err) {
      console.error("database error :", err);
      res.status(500).send("Internal Server Error");
    } else {
      if (result.affectedRows > 0) {
        console.log("Updated rows:", result.affectedRows);
        res.json({
          success: true,
        });
      } else {
        //없는경우
        res.json({
          success: false,
          data: "None",
        });
      }
    }
  });
});
