'use strict';

var Secrets;

try {
  Secrets = require('./secrets');
} catch(ex){

}

var env = process.env.NODE_ENV || 'development';

var common = {
  FIREBASE_SECRET: Secrets ? Secrets.FIREBASE_SECRET : process.env.FIREBASE_SECRET,
  FIREBASE_EXPIRE: 24
};

var environments = {
  development: {
    PORT: 8000,
    MONGO_URL: 'mongodb://localhost/zilo-dev'
  },
  test: {
    PORT: 0,
    MONGO_URL: 'mongodb://localhost/zilo-test'
  },
  production: {
    PORT: process.env.PORT || 0,
    MONGO_URL: 'mongodb://heroku_app36654483:mfgvcv91lsk0du9guu67cqmrlj@ds037387.mongolab.com:37387/heroku_app36654483'
  }
};

var environment = environments[env];

Object.keys(common).forEach(function(key){
  environment[key] = common[key];
});

console.log('Environment: ', environment);
exports.environment = environment;
