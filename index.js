const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session'); //先製造cookie再讓下方的passport 使用他們
const passport = require('passport');
const keys = require('./config/keys');
require('./models/User');
require('./services/passport');

mongoose.connect(keys.mongoURI);


const app = express();

app.use(
    cookieSession({ //管理所有的cookie叫做cookie session //設定之後就會存進cookie
        maxAge:30 * 24 * 60 * 60 * 1000, //30天
        keys:[keys.cookieKey]
    })
);

app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoutes')(app);  //在authRroutes傳入app

const PORT = process.env.PORT || 5000;
app.listen(PORT);
console.log(`node server run in port ${PORT}...`)