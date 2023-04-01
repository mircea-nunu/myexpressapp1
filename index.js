const express = require('express');
const app = new express();
const port = 8080;

app.get("/", (req,res) => {
    return res.send("Hello World! I'm your code");
});

let server = app.listen(port, () => {
    console.log("listening at http://localhost:"+ port)
})