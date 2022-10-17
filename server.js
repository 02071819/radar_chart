const mysql = require("mysql");
const express = require("express");
const app = express();
const port = 3000;
const path = require("path");

app.set("view engine");
// app.use(express.static("public"));
// app.use(express.urlencoded({ extended: true }));

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "radarchart",
});

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', function (req, res) {
  // res.render('index.ejs');
  res.sendFile(path.join(__dirname, "views", "index.html"));

  con.connect(function (error) {
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

app.post('/', function (req, res) {

  // var avg1 = req.body.avg1;
  // var avg2 = req.body.avg2;
  // var avg3 = req.body.avg3;
  // var avg4 = req.body.avg4;
  // var avg5 = req.body.avg5;
  var data = req.body;

  // var sql = INSERT INTO average (average1, average2, average3, average4, average5) VALUES(?, ?, ?, ?, ?);
  con.query(
    "INSERT INTO average (avg1, avg2, avg3, avg4, avg5) VALUES(?, ?, ?, ?, ?);",
    [data.avg1, data.avg2, data.avg3, data.avg4, data.avg5],
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

app.get("/page2", (req, res) => {
  res.render("page2.ejs");
});
app.get("/result", (req, res) => {
  res.render("result_page.ejs");
});

// 使用靜態資源
app.use(express.static(__dirname + '/public'));
app.use(express.urlencoded({ extended: true }));

app.listen(port, () => {
  console.log(`radarchart listening on port ${port}`);
});
