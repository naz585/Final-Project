const router = require("express").Router();
const axios = require("axios")
const fs = require('fs');
const MySportsFeeds = require("mysportsfeeds-node");

// var msf = new MySportsFeeds("2.0", true );

// msf.authenticate("30bfa27e-6b38-4d0a-9ce2-661316", "MYSPORTSFEEDS");
// msf.getData('nba', '2018-2019-regular', 'daily_games','json',{date:'20181121'}).then(function(data){
//     console.log(data)
// })


    var nbaApi = function(){

var msf = new MySportsFeeds("2.0", true );
        msf.authenticate("30bfa27e-6b38-4d0a-9ce2-661316", "MYSPORTSFEEDS");
//   var sports = [];
        msf.getData('nba', '2018-2019-regular', 'daily_games','json',{date:'20181121'}).then(function(data){
    //console.log(msf)
    res.send(data)
    })

//   return fs.readFile(__dirname + '/results/daily_games-nba-2018-2019-regular.JSON','utf8', (err, data) => {
//         if (err) throw err;
//         var json = JSON.parse(data)
//        return json.games
//       });
      

//  console.log(sports);
//  console.log("TESTTTTTTT")
    
     }
    module.exports = nbaApi;

//return this.baseUrl + '/' + league + '/' + season + '/date/' + params['date'] + '/games.' + format
