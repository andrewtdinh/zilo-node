'use strict';

var Listing = require('../../models/listing');

exports.register = function(server, options, next){
  server.route({
    method: 'GET',
    path: '/listings',
    config: {
      description: 'Get all listings',
      handler: function(request, reply){
        if(request.auth.credentials._id){
          Listing.find({userId: request.auth.credentials._id}, function(err, listings){
            return reply({listings: listings});
          });
        } else {
          //do something when user is not logged in
        }
      }
    }
  });

  return next();
};

exports.register.attributes = {
  name: 'listings.index'
};
