const express = require('express');
var app = express();


app.get('/',function(res,req) {
    console.log(`123`)
})

app.listen(5000);
console.log(`node server run in port 5000...`)