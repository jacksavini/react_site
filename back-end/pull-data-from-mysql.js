const mysql = require("mysql")

// Create a connection to the MySQL server
const conn = mysql.createConnection({
    host: "108.167.143.113",
    user: "jacksini_jacks",
    password: "mySQLpwd6375!",
    database: "jacksini_first_database"
})

//Connecting to database
conn.connect((e) => {
    if (e) {
        console.error("Error, could not connect to database: ", e)
        return
    }
    console.log("Connects to database!")
})

//Collecting data from database
conn.query("SELECT * FROM PRODUCTS", (e, rows) => {
    if (e) {
        console.error("Error querying database: ", e)
        return
    }
    console.log("Data received from database: ")
    rows.forEach((row) => {
        console.log(row)
    })
})

//Ending the connection
conn.end((e) => {
    if (e) {
        console.error("Error! Closing down database connection: ", e)
        return
    }
    console.log("Database connection closed")
})