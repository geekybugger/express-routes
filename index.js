const express = require("express");

const app = express();
const port = 8000;
//app.METHOD(PATH, HANDLER) : Basic syntax of Routes
app.get("/", (req, res) => res.send("Hello world!"));
app.get("/home", (req, res) => res.send("This is a home page"));
app.get("/about", (req, res) => res.send("This is a about page"));

app.listen(port, () => console.log("App is running on localhost:" + port));
