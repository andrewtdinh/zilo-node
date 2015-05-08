'use strict';

var Listing = require('../../models/listing');
var Joi = require('joi');

exports.register = function(server, options, next){
  server.route({
    method: 'DELETE',
    path: '/listings/{listingId}',
    config: {
      description: 'Delete a listing by Id',
      validate: {
        params: {
          listingId: Joi.string().length(24).required()
        }
      },
      handler: function(request, reply){
        Listing.findByIdAndRemove(request.params.listingId, function(err, listing){
          return reply(listing);
        });
      }
    }
  });

  return next();
};

exports.register.attributes = {
  name: 'listings.destroy'
};
