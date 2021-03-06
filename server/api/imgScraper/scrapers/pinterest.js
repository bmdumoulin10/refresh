'use strict';

var fs = require('fs');
var request = require('request');
var cheerio = require('cheerio');

exports.list = function(url, cb){
  // this is the actual request to the pinterest page we care about
  request(url, function(error, resp, body){
    if(error){
      cb({
        error: error
      });
    }
    if(!error){
      var $ = cheerio.load(body);
      var pin = {};
      var $url = url;
      var $img = $('.heightContainer img').attr('src');//get from pinteret
      var $desc = $('.heightContainer img').attr('alt');//description from pinteret

      console.log($img + 'pin url');

      // Finding the bits on the page we care about based on the class
      var pin = {
        img: $img,
        url: $url,
        desc: $desc
      }
      // respond with the final JSON object
      cb(pin);
    }
  });
}
