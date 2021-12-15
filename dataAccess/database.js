const mysql = require("mysql");

const config ={
    host:'localhost',
    user: 'root',
    password: 'root',
    database: 'bead_bunter',
}

let connection = mysql.createConnection(config)
connection.connect((error) => {
    if (error) {
        console.log(error)
    } else {
        console.log("Connected!")
    }
})

module.exports ={
    connection : mysql.createConnection(config)
}