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
          Listing.find(function(err, listings){
            console.log('Inside the anonymous function find, the listings:', listings);
            return reply({listings: listings});
          });
        }
      }
    }
  });

  return next();
};

exports.register.attributes = {
  name: 'listings.index'
};
