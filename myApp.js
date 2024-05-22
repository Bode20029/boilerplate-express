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

app.use((req, res, next) => {
    var string = req.method + " " + req.path + " - " + req.ip;
    console.log(string);
    
    
    next();
  })

app.get('/now',(req, res, next) => {
    req.time = new Date().toString();
    next();
}, (req,res) => {
    res.send({
        time: req.time
    })
}

)


























 module.exports = app;
