// firgure out what set of credentials to return
if (process.env.NODE_ENV === 'production'){ //process.env.NODE_ENV heroku會產生給你
    module.exports = require('./prod');
}else{

    module.exports = require('./dev');
}