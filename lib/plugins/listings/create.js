'use strict';

var Listing = require('../../models/listing');

exports.register = function(server, options, next){
  server.route({
    method: 'POST',
    path: '/listings',
    config: {
      description: 'Create a listing',
      handler: function(request, reply){
        console.log('request.auth.credentials._id: ', request.auth.credentials._id);
        if(!request.auth.credentials._id){return reply();}

        var listing = new Listing(request.payload);
        console.log(listing);
        listing.userId = request.auth.credentials._id;
        listing.save(function(){
          return reply(listing);
        });
      }
    }
  });

  return next();
};

exports.register.attributes = {
  name: 'listings.create'
};
