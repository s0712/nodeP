var express = require('express');
var app = express();

app.get('/',function (req,res) {
    res.send('Hello World!');
})

app.listen(9999,function(){
    console.log('express in http://localhost:9999')
})