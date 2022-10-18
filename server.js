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

app.get("/page2", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "page2.html"));

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

app.get("/result", (req, res) => {
  res.render("result_page.ejs");
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
  var answer6_1 = req.body.question6_1;
  var answer6_2 = req.body.question6_2;
  var answer6_3 = req.body.question6_3;
  var answer7_1 = req.body.question7_1;
  var answer7_2 = req.body.question7_2;
  var answer7_3 = req.body.question7_3;
  var answer8_1 = req.body.question8_1;
  var answer8_2 = req.body.question8_2;
  var answer8_3 = req.body.question8_3;
  var answer9_1 = req.body.question9_1;
  var answer9_2 = req.body.question9_2;
  var answer9_3 = req.body.question9_3;
  var answer10_1 = req.body.question10_1;
  var answer10_2 = req.body.question10_2;
  var answer10_3 = req.body.question10_3;

  var answer1_1 = parseInt(answer1_1, 10);
  var answer1_2 = parseInt(answer1_2, 10);
  var answer1_3 = parseInt(answer1_3, 10);

  var answer2_1 = parseInt(answer2_1, 10);
  var answer2_2 = parseInt(answer2_2, 10);
  var answer2_3 = parseInt(answer2_3, 10);

  var answer3_1 = parseInt(answer3_1, 10);
  var answer3_2 = parseInt(answer3_2, 10);
  var answer3_3 = parseInt(answer3_3, 10);

  var answer4_1 = parseInt(answer4_1, 10);
  var answer4_2 = parseInt(answer4_2, 10);
  var answer4_3 = parseInt(answer4_3, 10);

  var answer5_1 = parseInt(answer5_1, 10);
  var answer5_2 = parseInt(answer5_2, 10);
  var answer5_3 = parseInt(answer5_3, 10);

  var answer6_1 = parseInt(answer6_1, 10);
  var answer6_2 = parseInt(answer6_2, 10);
  var answer6_3 = parseInt(answer6_3, 10);

  var answer7_1 = parseInt(answer7_1, 10);
  var answer7_2 = parseInt(answer7_2, 10);
  var answer7_3 = parseInt(answer7_3, 10);

  var answer8_1 = parseInt(answer8_1, 10);
  var answer8_2 = parseInt(answer8_2, 10);
  var answer8_3 = parseInt(answer8_3, 10);

  var answer9_1 = parseInt(answer9_1, 10);
  var answer9_2 = parseInt(answer9_2, 10);
  var answer9_3 = parseInt(answer9_3, 10);

  var answer10_1 = parseInt(answer10_1, 10);
  var answer10_2 = parseInt(answer10_2, 10);
  var answer10_3 = parseInt(answer10_3, 10);

  var avg1 = (answer1_1 + answer1_2 + answer1_3)/3;
  var avg2 = (answer2_1 + answer2_2 + answer2_3)/3;
  var avg3 = (answer3_1 + answer3_2 + answer3_3)/3;
  var avg4 = (answer4_1 + answer4_2 + answer4_3)/3;
  var avg5 = (answer5_1 + answer5_2 + answer5_3)/3;
  var avg6 = (answer6_1 + answer6_2 + answer6_3)/3;
  var avg7 = (answer7_1 + answer7_2 + answer7_3)/3;
  var avg8 = (answer8_1 + answer8_2 + answer8_3)/3;
  var avg9 = (answer9_1 + answer9_2 + answer9_3)/3;
  var avg10 = (answer10_1 + answer10_2 + answer10_3)/3;


  console.log(answer1_1);
  console.log(answer1_2);
  console.log(answer1_3);
  console.log(avg1);
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


// 使用靜態資源
app.use(express.static(__dirname + "/public"));
app.use(express.urlencoded({ extended: true }));

app.listen(port, () => {
  console.log(`radarchart listening on port ${port}`);
});
