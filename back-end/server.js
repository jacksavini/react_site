const express = require("express");
const mysql = require("mysql");
const app = express();

const PORT = process.env.PORT || 5002;

// Middleware to parse JSON bodies
app.use(express.static(path.join(__dirname, '../front-end/build')));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../front-end/build', 'index.html'));
});

// Middleware to parse URL-encoded form data
app.use(express.urlencoded({ extended: true }));

// Create a connection to the MySQL server
const connection = mysql.createPool({
    host: "108.167.143.113",
    user: "jacksini_jacks",
    password: "mySQLpwd6375!",
    database: "jacksini_comments_section",
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
})

app.get("/api/comments", (req, res) => {
    connection.query("SELECT * FROM comments", (error, results) => {
        if (error) {
            console.error("Error fetching products from database:", error);
            res.status(500).json({ error: "Error fetching products from database" });
            return;
        }
        res.json(results);
    });
});

app.post("/api/post", (req, res) => {
    const { name, text, likes, dislikes } = req.body;

    // Insert the comment into the database
    connection.query(
        "INSERT INTO `comments` (`name`, `text`, `likes`, `dislikes`) VALUES (?, ?, ?, ?)",
        [name, text, likes, dislikes],
        (error, results) => {
            if (error) {
                console.error("Error inserting comment into database:", error);
                res.status(500).json({ error: "Error inserting comment into database" });
                return;
            }
            // Return the inserted comment data
            res.json({ message: "Comment inserted successfully", comment: results });
        }
    );
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});