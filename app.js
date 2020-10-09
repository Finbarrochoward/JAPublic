var express = require('express');
var app = express();
var fs = require('fs');
const path = require('path');
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false });
var redis = require('redis');

const REDIS_PORT = 6379;
// const client = redis.createClient(REDIS_PORT);

var x;
var file;

const selectString = "SELECT * FROM rent_contract";

app.use(express.static('./'));

app.listen(3001, function () {
    console.log("Cash")
})


app.post('/test', (req, res) => {
    console.log(req);
    res.send("hrllo");
});

// app.post('/writeToFile', urlencodedParser, function (req, res) {
//     x = Math.floor(Math.random() * 10000);
//     // file = path.join(__dirname + "/TestFiles/newFileFromServer" + 1 + ".txt");
//     console.log(req.body.fname);
//     fs.appendFileSync(path.join(__dirname + "/TestFiles/newFileFromServer" + x + ".txt"), req.body.fname + " " + req.body.lname +
//         req.body.rentAmount + " " + req.body.address + " " + req.body.subName, function (err, data) {
//             if (err) console.log('error', err);
//         });
//     // client.set('fname', req.body.fname);
//     // client.set('lname', req.body.lname);

//     res.download(path.join(__dirname + "/TestFiles/newFileFromServer" + x + ".txt"), function (err) {
//         if (err) console.log("error", err);

//         // res.sendFile(path.join(__dirname + "/TestFiles/newFileFromServer" + 1 + ".txt"), function(err) {
//         //     if (err) throw err; 
//         // });
//         // fs.appendFile(file)

//         // res.sendFile(path.join(__dirname + '/downloadPage.html'));
//     });

//     app.get('/getFile', function (req, res) {
//         // res.download(path.join(__dirname + "/TestFiles/newFileFromServer" + x + ".txt") , function(err) {
//         //     if (err) console.log("error", err);
//         // });
//         // res.end();
//         // res.status(404).end(); 
//         x = Math.floor(Math.random() * 10000);
//         file = path.join(__dirname + "/TestFiles/newFileFromServer" + 1932 + ".txt");
//         var data1 = client.get('fname', (err, data) => {
//             if (err) throw err;
//             if (data !== null) {
//                 fs.appendFile(file, data, function (err, newData) {
//                     if (err) throw err;
//                 });
//                 console.log(data);
//             }
//         })
//         res.download(path.join(__dirname + "/TestFiles/newFileFromServer" + 1932 + ".txt"), function (err) {
//             if (err) console.log("error", err);
//         })
//         res.sendFile(file, function (err) {
//             if (err) throw err;
//         })
//     })
// });


// // app.post('/privacyPolicy', (req, res) => {
    
// // });

// function findSpaces(file) {
//     fs.readFile(file, (err, data) => {
//         console.log(data);
//     });
// }



