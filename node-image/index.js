const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.send("HelloWorld Suryank Dixit");
});

app.listen(8080, () => {
    console.log("Server is listening on port 8080");
});