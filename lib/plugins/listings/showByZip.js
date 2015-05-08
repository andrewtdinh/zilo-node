'use strict';

var Listing = require('../../models/listing');

exports.register = function(server, options, next){
  server.route({
    method: 'GET',
    path: '/listings/zip/{zipcode}',
    config: {
      description: 'Get listings for a zipcode',
      handler: function(request, reply){
        if(request.auth.credentials._id){
          Listing.find({userId: request.auth.credentials._id, zip: request.params.zipcode}, function(err, listings){
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
  name: 'listings.showByZip'
};
