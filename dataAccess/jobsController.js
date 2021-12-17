const config = require('./database')
const connection = config.connection;
const response = require('../response')

exports.getAllJobs = (req, res) => {
    connection.query('SELECT * FROM jobs', (error, rows, fields) => {
        if (error) {
            console.log(error)
        } else
            response.status(rows, res)
    })
}

exports.getJob = (req, res, id) => {
    connection.query('SELECT * FROM jobs where id=' + id, (error, rows, fields) => {
        if (error) {
            console.log(error)
        } else
            response.status(rows, res)
    })
}

exports.makeJob = (req, res) => {
    connection.query('INSERT INTO jobs (position, req_exp, salary, company_name) VALUES('
        + '"' + req.query.position + '"' + ", " + req.query.req_exp + ", " + req.query.salary + ", " + '"' + req.query.company_name + '"' + ')', (error, results) => {
        if (error) {
            console.log(error)
        } else
            response.status(results, res)
    })
}

exports.alterJob = (req, res) => {
    connection.query(
        "UPDATE jobs SET position =" + '"' + req.query.position + '"' + ", "
        + 'req_exp = ' + req.query.req_exp + ", "
        + 'salary = ' + req.query.salary  + ", "
        + 'company_name = ' + '"' + req.query.company_name + '"'
        + ' WHERE id = ' + req.query.id, (error, results) => {
            if (error) {
                console.log(error)
            } else
                console.log("job added")
            response.status(results, res)
        })
}

exports.deleteJob = (req, res) => {
    connection.query(
        "DELETE FROM jobs WHERE id = '" + req.query.id + "';", (error, results) => {
            if (error) {
                console.log(error)
            } else
            response.status(results, res)
        }
    )
}