const express = require('express');
var app = express();


app.get('/',(res,req)=>{
    res.setEncoding({hi:'there'});
})

const PORT = process.env.PORT || 5000;
app.listen(PORT);
console.log(`node server run in port ${PORT}...`)