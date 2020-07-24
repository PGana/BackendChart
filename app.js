
var express = require('express');
var app = express();


app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/test', (req, res) =>{
    res.status(200).send({success:true, message:"server is up and running"});
})

app.get('/getMeg', (req, res) =>{
    var jsonData = [
        {"name":'ABC', message:'Hello there'},
        {"name":'xyz', message:'I am fine'},
        {"name":'Gana', message:'How are you'},
        {"name":'Sures', message:'Good'}
    ]
    res.status(200).send({success:true, message:jsonData});
})

// 
var port = process.env.PORT || 3000;

app.listen(port, ()=>{
    console.log('Server is running on Port :' + port);
})