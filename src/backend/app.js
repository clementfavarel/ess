const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = process.env.BACKEND_PORT || 3000; // Default port is 3000 if not provided in .env

// Middleware to allow CORS from all origins
app.use(cors());

// Example route
app.get("/", (req, res) => {
    res.send("Hello from Express.js backend!");
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
