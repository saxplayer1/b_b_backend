const config = require('./database')
const connection = config.connection;
const response = require('../response')

exports.makeSpecs = (req, res) => {
    let specs = req.query.specs.split(',')
    let years = req.query.years.split(',')

    console.log(specs)
    console.log(years)

    for (let i = 0; i < specs.length; i++) {
        connection.query(
            "INSERT INTO specs VALUES('" + req.query.passport + "', '" + specs[i] + "', " + years[i].valueOf() + ");"
        )
    }
}

exports.getSpecsForUser = (req, res) => {
    connection.query("select * from specs where passport_number = " + req.query.passport, (error, results) => {
        if (error) {
            console.log(error)
        } else
            response.status(results, res)
    })
}

exports.deleteSpecs = (req, res) => {
    connection.query("delete from specs where passport_number = " + req.query.passport);
}

exports.getAllSpecs = (req, res) => {
    connection.query("select * from specs", (error, rows, fields) => {
        if (error) {
            console.log(error)
        } else {
            response.status(rows, res)
        }
    })
}