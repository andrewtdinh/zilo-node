'use strict';

var User = require('../../models/user');

exports.register = function(server, options, next){
  server.route({
    method: 'POST',
    path: '/users',
    config: {
      description: 'Create a user',
      handler: function(request, reply){
        console.log('request.auth.credentials._id: ', request.auth.credentials._id);
        if(request.auth.credentials._id){return reply();}

        var user = new User();
        user.firebaseId = request.auth.credentials.firebaseId;
        console.log('user: ', user);
        user.save(function(){
          return reply();
        });
      }
    }
  });

  return next();
};

exports.register.attributes = {
  name: 'users.create'
};
