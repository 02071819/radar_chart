const mysql = require("mysql");
const express = require("express");
const app = express();
const port = 3000;
const path = require("path");

app.set("view engine");

// 與MySQL資料庫中的radarchart資料庫做連結
var conn = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "radarchart",
});

// bodyparser用於app.post
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// 渲染index.html
app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "views", "index.html"));

  // 連接資料庫是否成功
  conn.connect(function (error) {
    if (error) {
      console.log("Error");
    } else {
      console.log("MySql DataBase Connected");
      // con.query("select * from average", function (error, rows) {
      //   if (error) {
      //     console.log("error");
      //   } else {
      //     console.log("success");
      //     console.log(rows[0]);
      //   }
      // });
    }
  });
});

// 前端表單輸入
app.post("/", function (req, res) {
  var answer1_1 = req.body.question1_1;
  var answer1_2 = req.body.question1_2;
  var answer1_3 = req.body.question1_3;
  var answer2_1 = req.body.question2_1;
  var answer2_2 = req.body.question2_2;
  var answer2_3 = req.body.question2_3;
  var answer3_1 = req.body.question3_1;
  var answer3_2 = req.body.question3_2;
  var answer3_3 = req.body.question3_3;
  var answer4_1 = req.body.question4_1;
  var answer4_2 = req.body.question4_2;
  var answer4_3 = req.body.question4_3;
  var answer5_1 = req.body.question5_1;
  var answer5_2 = req.body.question5_2;
  var answer5_3 = req.body.question5_3;

  var avg1 = (answer1_1 + answer1_2 + answer1_3) / 3;
  var avg2 = (answer2_1 + answer2_2 + answer2_3) / 3;
  var avg3 = (answer3_1 + answer3_2 + answer3_3) / 3;
  var avg4 = (answer4_1 + answer4_2 + answer4_3) / 3;
  var avg5 = (answer5_1 + answer5_2 + answer5_3) / 3;

  // query做SQL語法 insert是否成功
  conn.query(
    "INSERT INTO average (avg1, avg2, avg3, avg4, avg5) VALUES(?, ?, ?, ?, ?);",
    [avg1, avg2, avg3, avg4, avg5],
    function (error, result) {
      if (error) {
        // Throw your error output here.
        console.log("An error occurred.");
      } else {
        // Throw a success message here.
        console.log("1 record successfully inserted into db");
      }
    }
  );
});



//  未算平均值之原程式碼

// app.get("/", function (req, res) {
//   res.render("index.ejs");
//   //res.sendFile(path.join(__dirname, "views", "index.ejs"));
//   // con.connect(function (error) {
//   //   if (error) {
//   //     console.log("Error");
//   //   } else {
//   //     console.log("MySql DataBase Connected");

//   //   }
//   // });
//   // con.query("select * from average", function (error, rows) {
//   //   if (error) {
//   //     console.log("error");
//   //   } else {
//   //     console.log("success");
//   //     console.log(rows[0]);
//   //   }
//   // });
// });

// var con = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "",
//   database: "radarchart",
// });

// const bodyParser = require("body-parser");
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());

// app.get('/', function (req, res) {
//   // res.render('index.ejs');
//   res.sendFile(path.join(__dirname, "views", "index.html"));

//   con.connect(function (error) {
//     if (error) {
//       console.log("Error");
//     } else {
//       console.log("MySql DataBase Connected");
//       // con.query("select * from average", function (error, rows) {
//       //   if (error) {
//       //     console.log("error");
//       //   } else {
//       //     console.log("success");
//       //     console.log(rows[0]);
//       //   }
//       // });
//     }
//   });
// });

// app.post('/', function (req, res) {

//   // var avg1 = req.body.avg1;
//   // var avg2 = req.body.avg2;
//   // var avg3 = req.body.avg3;
//   // var avg4 = req.body.avg4;
//   // var avg5 = req.body.avg5;
//   var data = req.body;

//   // var sql = INSERT INTO average (average1, average2, average3, average4, average5) VALUES(?, ?, ?, ?, ?);
//   con.query(
//     "INSERT INTO average (avg1, avg2, avg3, avg4, avg5) VALUES(?, ?, ?, ?, ?);",
//     [data.avg1, data.avg2, data.avg3, data.avg4, data.avg5],
//     function (error, result) {
//       if (error) {
//         // Throw your error output here.
//         console.log("An error occurred.");
//       } else {
//         // Throw a success message here.
//         console.log("1 record successfully inserted into db");
//       }
//     }
//   );
// });

app.get("/page2", (req, res) => {
  res.render("page2.ejs");
});
app.get("/result", (req, res) => {
  res.render("result_page.ejs");
});

// 使用靜態資源
app.use(express.static(__dirname + "/public"));
app.use(express.urlencoded({ extended: true }));

app.listen(port, () => {
  console.log(`radarchart listening on port ${port}`);
});
