const mysql = require('mysql');
const express = require('express');
const app = express();
const port = 3000;

app.set('view-engine')
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

const con = mysql.createConnection(
    {
        host:'127.0.0.1', 
        user: 'root', 
        password:'',
        database: 'radarchart'
    }
)

const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:true }));

app.get('/', function(req, res){
    res.render('index.ejs');
})

app.post('/views/index.ejs',function(req, res){
    // console.log(req.body);
    var avg1 = req.body.avg1;
    var avg2 = req.body.avg2;
    var avg3 = req.body.avg3;
    var avg4 = req.body.avg4;
    var avg5 = req.body.avg5;

    con.connect(function(error){
        if (error) throw error;

        var sql = `INSERT INTO average(average1, average2, average3, average4, average5) VALUES(?, ?, ?, ?, ?)`;
        con.query(sql, [avg1, avg2, avg3, avg4, avg5], function(error, result){
            if (error) {
                // Throw your error output here.
                console.log("An error occurred.");
            } else {
                // Throw a success message here.
                console.log("1 record successfully inserted into db");
            }
        });
    });
})

app.get('/page2', (req, res) => {
    res.render('page2.ejs');
})
app.get('/result', (req, res) => {
    res.render('result_page.ejs');
})

app.listen(port, () => {
    console.log(`radarchart listening on port ${port}`)
})

