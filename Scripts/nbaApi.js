const router = require("express").Router();
const axios = require("axios")
const fs = require('fs');
const MySportsFeeds = require("mysportsfeeds-node");


    var nbaApi = function(){

var msf = new MySportsFeeds("2.0", true);

msf.authenticate("30bfa27e-6b38-4d0a-9ce2-661316", "MYSPORTSFEEDS");
//   var sports = [];
    
msf.getData('nba', '2018-2019-regular', 'daily_games','json',{date:'20181123'}).then(function(data){
      //function(league, season, feed, format, params)
     return data.games
     
    })
//  console.log(sports);
//  console.log("TESTTTTTTT")
    
     }

    module.exports = nbaApi;

//return this.baseUrl + '/' + league + '/' + season + '/date/' + params['date'] + '/games.' + format