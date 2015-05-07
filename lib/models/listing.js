'use strict';

var Mongoose = require('mongoose');

var listingSchema = Mongoose.Schema({
  userId : {type: String, required: true},
  createdAt : {type: Date, required: true, default: Date.now},
  addrString : {type: String, required: true},
  lat : {type: Number, required: true},
  lng : {type: Number, required: true},
  price : {type: Number, required: true},
  beds : {type: Number, required: true},
  baths : {type: Number, required: true},
  sqft : {type: Number, require: true},
  photo : {type: String}
});

var Listing = Mongoose.model('Listing', listingSchema);
module.exports = Listing;
