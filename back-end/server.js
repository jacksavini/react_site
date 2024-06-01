const express = require("express");
const mysql = require("mysql");
const path = require("path");
const app = express();
const cors = require("cors");

const PORT = process.env.PORT || 5002;

// Middleware to parse URL-encoded form data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors({
    origin: "http://www.jacksavini.com"
}));

// Create a connection to the MySQL server
const connection = mysql.createPool({
    host: "108.167.143.113",
    user: "jacksini_jacks",
    password: "mySQLpwd6375!",
    database: "jacksini_comments_section",
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

// GET endpoint to fetch comments
app.get("/api/comments", (req, res) => {
    connection.query("SELECT * FROM comments", (error, results) => {
        if (error) {
            console.error("Error fetching comments from database:", error);
            res.status(500).json({ error: "Error fetching comments from database", details: error.message });
            return;
        }
        res.json(results);
    });
});

// POST endpoint to insert a new comment
app.post("/api/post", (req, res) => {
    const { name, text, likes, dislikes } = req.body;

    // Validate the input
    if (!name || !text || typeof likes !== 'number' || typeof dislikes !== 'number') {
        res.status(400).json({ error: "Invalid input data" });
        return;
    }

    // Insert the comment into the database
    connection.query(
        "INSERT INTO comments (name, text, likes, dislikes) VALUES (?, ?, ?, ?)",
        [name, text, likes, dislikes],
        (error, results) => {
            if (error) {
                console.error("Error inserting comment into database:", error);
                res.status(500).json({ error: "Error inserting comment into database", details: error.message });
                return;
            }
            // Return the inserted comment data
            res.json({ message: "Comment inserted successfully", comment: { id: results.insertId, name, text, likes, dislikes } });
        }
    );
});

app.use(express.static(path.join(__dirname, "front-end/build")));

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "/../front-end/build", "index.html"))
})

app.use((err, req, res, next) => {
    console.error("Unhandled error:", err)
    res.status(500).json({ error: "Internal server error", details: err.message })
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})