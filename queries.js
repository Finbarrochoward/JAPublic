var pgp = require('pg-promise')();
const cn = {
    host: 'localhost',
    port: 5424,
    database: 'jadb',
    user: 'postgres',
    password: 'Bmx4life2003?',
    max: 30 // use up to 30 connections
};
var db = pgp(cn);

let sco; // shared connection object;

// const getRentContract = (request, response) => {
//     pool.query('SELECT * FROM rent_contract', (error, results) => {
//         if (error) {
//             throw error;
//         }
//         response.status(200).json(results.row)
//     })
// };

module.exports = {
    getQueryResult: function (queryString) {
        db.connect()
        .then(obj => {
            // obj.client = new connected Client object;

            sco = obj; // save the connection object;

            // execute all the queries you need:
            return sco.any(queryString);
        })
        .then(data => {
            // success
            console.log(data);
        })
        .catch(error => {
            // error
        })
        .finally(() => {
            // release the connection, if it was successful:
            if (sco) {
                // if you pass `true` into method done, i.e. done(true),
                // it will make the pool kill the physical connection.
                sco.done();
            }
    })},


    insertInto: function(insertString) {
        db.one(insertString)
        .then(function (data){
            console.log(data.value);
        })
        .catch(function (error) {
            throw error;
        })
    }
};