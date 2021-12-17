const config = require('./database')
const connection = config.connection;
const response = require('../response')

exports.getEmployers = (req, res) => {
    connection.query("select * from companies", (error, rows, fields) => {
        if (error) {
            console.log(error)
        } else
            response.status(rows, res)
    })
}

exports.getCompanyNames = (req, res) => {
    connection.query("select company_name from companies", (error, rows, fields) => {
        if (error) {
            console.log(error)
        } else
            response.status(rows, res)
    })
}

exports.getJobsForCompany = (req, res) => {
    connection.query("select * from jobs where company_name = '" + req.query.company_name + "'", (error, rows) => {
        if (error) {
            console.log(error)
        } else
            response.status(rows, res)
    })
}

exports.createCompany = (req, res) => {
    connection.query("insert into companies values('"
        + req.query.company_name + "', "
        + req.query.address + "', "
        + req.query.phone_number + "', "
        + req.query.website + "')", (error, results) => {
        if (error) {
            console.log(error)
        } else
            response.status(results, res)
    })
    console.log("Employer created")
}

exports.alterCompany = (req, res) => {
    connection.query("update companies set address = '"
        + req.query.address + "', phone_number = '"
        + req.query.phone_number + "', website = '"
        + req.query.website
        + "'where company_name = '"
        + req.query.company_name +"'", (error, results) => {
        if (error) {
            console.log(error)
        } else
            response.status(results, res)
    })
    console.log("Employer altered")
}

exports.deleteCompany = (req, res) => {
    connection.query("delete from jobs where company_name = '" + req.query.company_name + "'")
    connection.query("delete from companies where company_name = '" + req.query.company_name + "'",
        (error, results) => {
        if (error) {
            console.log(error)
        } else
            console.log("job added")
        response.status(results, res)
    })
}