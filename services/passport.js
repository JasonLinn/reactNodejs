const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys.js');

const User = mongoose.model('users');


passport.serializeUser((user,done)=>{ //這邊的user會從new GoogleStrategy callback回傳到serializeUser這個方法裡
    done(null,user.id); //這個id是mongoDB儲存的id
});

passport.deserializeUser((id,done)=>{
    User.findById(id)
        .then(user=>{
            done(null,user);
        })
});

passport.use(new GoogleStrategy({
        clientID: keys.googleClientID,
        clientSecret: keys.googleClientSecret,
        callbackURL: '/auth/google/callback',
        proxy:true //告訴passport 不管到哪個proxy都讓它通過
    },
    (accessToken, refreshToken, profile, done) => {
        // console.log('access token', accessToken);
        // console.log('refresh token', refreshToken);
        // console.log('profile:', profile);
        User.findOne({googleId:profile.id}) //return promise
            .then((existingUser)=>{
                if(existingUser){
                    //we already have a record with given profile ID
                    console.log('wellcom:',existingUser);
                    done(null,existingUser);  //告訴passport結束，傳入null(err)代表OK
                }else{
                    //we don't have a user record
                    new User({ googleId:profile.id}) //創造一個mongoose 模型(model)實體(instance)
                        .save() //存到mongoDB
                        .then(user=>done(null,user)); //回傳callback,mongoDB裡的user
                }
            })
    }
));