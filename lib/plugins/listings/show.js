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
          //do something
        }
      }
    }
  });

  return next();
};

exports.register.attributes = {
  name: 'listings.show'
};
