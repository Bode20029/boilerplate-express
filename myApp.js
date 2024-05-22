let express = require('express');
let app = express();

console.log("Hello World")

/*app.get('/', (req, res) => {
    res.send('Hello Express')
}) */ // Exercise 2
absolutePath = __dirname + '/views/index.html'

app.get('/', (req, res) => {
    res.sendFile(absolutePath)
})





























 module.exports = app;
