const config = require('./database')
const connection = config.connection;
const response = require('../response')

exports.makeSpecs = (req, res) => {

    let specs = req.query.specs.split(',')
    let years = req.query.years.split(',')

    for (let i = 0; i < specs.length; i++) {
        connection.query(
            "INSERT INTO specs VALUES('" + req.query.passport + "', '" + specs[i] + "', " + years[i].valueOf() + ");"
        )
    }
}