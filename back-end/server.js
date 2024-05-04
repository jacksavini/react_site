const express = require("express");
const mysql = require("mysql");

const app = express();
const PORT = process.env.PORT || 5001;

// Create a connection to the MySQL server
const connection = mysql.createConnection({
    host: "108.167.143.113",
    user: "jacksini_jacks",
    password: "mySQLpwd6375!",
    database: "jacksini_first_database"
})

app.get('/api/products', (req, res) => {
    connection.query('SELECT * FROM PRODUCTS', (error, results) => {
        if (error) {
            console.error('Error fetching products from database:', error);
            res.status(500).json({ error: 'Error fetching products from database' });
            return;
        }
        res.json(results);
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});