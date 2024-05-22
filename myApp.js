let express = require('express');
const req = require('express/lib/request');
let app = express();
require('dotenv').config()

console.log("Hello World")

/*app.get('/', (req, res) => {
    res.send('Hello Express')
}) */ // Exercise 2
absolutePath = __dirname + '/views/index.html'

app.get('/', (req, res) => {
    res.sendFile(absolutePath)
})

app.use('/public', express.static(__dirname + '/public'))

/*app.get('/json', (req,res) =>{
    if(process.env.MESSAGE_STYLE == 'uppercase'){
        res.json({"message": "HELLO JSON"})
}
    
    else  {
        res.json({"message": "Hello json"})
    }

}) */

app.get('/json',(req, res, next) => {
    let first = req.get
    let second = req.path
    let third = req.ip
    console.log( {first} +""+ {second} +"" +{third});
    
    
    next();
  })


























 module.exports = app;
