const config = require('./database')
const connection = config.connection;
const response = require('../response')

exports.getAllApplicants = (req, res) => {
    connection.query('SELECT * FROM applicants', (error, rows, fields) => {
        if (error) {
            console.log(error)
        } else
            response.status(rows, res)
    })
}

exports.createApplicant = (req, res) => {
    connection.query('INSERT INTO applicants (passport_number, name, surname, email, phone_number) VALUES ('
        + "'" + req.query.passport_number + "', "
        + "'" + req.query.name + "', "
        + "'" + req.query.surname + "', "
        + "'" + req.query.email + "', "
        + "'" + req.query.phone_number + "')", (error, results) => {
        if (error) {
            console.log(error)
        } else
        response.status(results, res)
    })
    console.log("applicant created")
}

exports.getJobForApplicant = (req, res) => {
    connection.query("select id, jobs.position, req_exp, salary, company_name, passport_number, years_exp\n" +
        "from jobs join specs on jobs.position = specs.position\n" +
        "where req_exp <= years_exp and passport_number = '" + req.query.passport_number + "'", (error, results) => {
        if (error) {
            console.log(error)
        } else
        response.status(results, res)
    })
}

exports.deleteApplicant = (req, res) => {
    connection.query(
        "DELETE FROM applicants WHERE passport_number = '" + req.query.passport + "';", (error, results) => {
            if (error) {
                console.log(error)
            } else
                console.log("job added")
            response.status(results, res)
        }
    )
}

exports.alterApplicant = (req, res) => {
    connection.query("update applicants set name ='" + req.query.name + "', "
        + "surname = '" + req.query.surname + "', "
        + "phone_number = '" + req.query.phone_number + "', "
        + "email = '" + req.query.email + "' "
        + "where passport_number = '" + req.query.passport_number + "';", (error, results) => {
        if (error) {
            console.log(error)
        } else
            console.log("applicant altered")
        response.status(results, res)
    })
}