'use strict';

var Listing = require('../../models/listing');
var Joi = require('joi');

exports.register = function(server, options, next){
  server.route({
    method: 'PUT',
    path: '/listings/{listingId}',
    config: {
      description: 'Update a listing',
      validate: {
        params: {
          listingId: Joi.string().length(24).required()
        }
      },
      handler: function(request, reply){
        if(request.auth.credentials._id){
          Listing.findByIdAndUpdate(request.params.listingId, request.payload, saveCb);
        }else{
          //do something;
        }

        function saveCb(err, listing){
          if(err){
            return reply(JSON.stringify(err)).code(400);
          }else{
            return reply(listing);
          }
        }
      }
    }
  });

  return next();
};

exports.register.attributes = {
  name: 'listings.update'
};
