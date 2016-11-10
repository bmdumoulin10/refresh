'use strict';

var scrapers = {};

scrapers['pinterest'] = require('./scrapers/pinterest.js');

exports.scrape = function(req, res){
  var url = req.body.url;
  var scraperToUse;

  if(url.indexOf('pinteret') > -1){
    scraperToUse = 'pinteret';
  } else{
    console.log('cannot locate scraper')
  }
  scrapers[scraperToUse].list(url, function(data){
    console.log('data from scraper: ', data);
    res.json(data);
  });
}
