'use strict';

var Listing = require('../../models/listing');

exports.register = function(server, options, next){
  server.route({
    method: 'GET',
    path: '/listings/{listingId}',
    config: {
      description: 'Get one listing by Id',
      handler: function(request, reply){
        if(request.auth.credentials._id){
          Listing.find({userId: request.auth.credentials._id, _id: request.params.listingId}, function(err, listing){
            return reply({listing: listing});
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
  name: 'listings.show'
};
