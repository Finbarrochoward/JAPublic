var express = require('express');
var app = express();
var fs = require('fs');
const path = require('path');
var bodyParser = require('body-parser');
var PizZip = require('pizzip');
var Docxtemplater = require('docxtemplater');


const REDIS_PORT = 6379;
// const client = redis.createClient(REDIS_PORT);

var x;
var file;

const selectString = "SELECT * FROM rent_contract";

app.use(express.static('./'));
app.use(bodyParser.json());

app.listen(3001, function () {
    console.log("Cash")
})

function replaceErrors(key, value) {
    if (value instanceof Error) {
        return Object.getOwnPropertyNames(value).reduce(function (error, key) {
            error[key] = value[key];
            return error;
        }, {});
    }
    return value;
}

function errorHandler(error) {
    console.log(JSON.stringify({ error: error }, replaceErrors));

    if (error.properties && error.properties.errors instanceof Array) {
        const errorMessages = error.properties.errors.map(function (error) {
            return error.properties.explanation;
        }).join("\n");
        console.log('errorMessages', errorMessages);
        // errorMessages is a humanly readable message looking like this :
        // 'The tag beginning with "foobar" is unopened'
    }
    throw error;
}

app.post('/postPrivPol', async (req, res) => {
    var content = fs.readFileSync(path.join(__dirname + '/contract/test-doc.docx'), 'binary');
    var zip = new PizZip(content);
    var doc;
    console.log(req.body.busName);
    try {
        doc = new Docxtemplater(zip);
    } catch (error) {
        // Catch compilation errors (errors caused by the compilation of the template : misplaced tags)
        errorHandler(error);
    }

    doc.setData(req.body);

    try {
        doc.render()
    }
    catch (error) {
        // Catch rendering errors (errors relating to the rendering of the template : angularParser throws an error)
        errorHandler(error);
    }

    var buf = doc.getZip()
        .generate({ type: 'nodebuffer' });


    // buf is a nodejs buffer, you can either write it to a file or do anything else with it.
    // fs.writeFileSync(path.join(__dirname, '/contract/test-output.docx'), buf);

    // res.download(path.join(__dirname + '/contract/test-output.docx'), (err) => {
    //     console.log(err);
    res.end(buf);
})


app.get('/getPrivPol', (req, res) => {

});

    // var filename = "PrivPolTest.docx"

    // await res.writeHead(200, {
    //     'Content-Type': "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    //     'Content-disposition': 'attachment;filename=' + filename,
    //     'Content-Length': buf.length
    // })
    // .then(res.end(buf));

    // res.end(buf);


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

