const mongoose = require('mongoose');
// const Schema = mongoose.Schema;
const { Schema } = mongoose; //es6 100% eaqul


const userSchema = new Schema({
    googleId:String
});

mongoose.model('users',userSchema);