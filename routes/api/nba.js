const router = require("express").Router();

var MySportsFeeds = require("mysportsfeeds-node");

var msf = new MySportsFeeds("2.0", true);


router.route("/players").get(function (req,res){

  msf.authenticate("30bfa27e-6b38-4d0a-9ce2-661316", "MYSPORTSFEEDS");
  
  

  msf.getData('nba', '2018-2019-regular', 'players','json',{}).then(function(data){
    //console.log(msf)
    res.send(data)
    })

    //function(league, season, feed, format, params)

})

router.route("/standings").get(function (req,res){

  msf.authenticate("30bfa27e-6b38-4d0a-9ce2-661316", "MYSPORTSFEEDS");
  
  

  msf.getData('nba', '2018-2019-regular', 'seasonal_standings','json',{}).then(function(data){
    //console.log(msf)
    res.send(data)
    })

    //function(league, season, feed, format, params)

})


router.route("/standings").get(function (req,res){

  msf.authenticate("30bfa27e-6b38-4d0a-9ce2-661316", "MYSPORTSFEEDS");
  
  

  msf.getData('nba', '2018-2019-regular', 'seasonal_standings','json',{}).then(function(data){
    //console.log(msf)
    res.send(data)
    })

    //function(league, season, feed, format, params)

})

router.route("/injuries").get(function (req,res){

  msf.authenticate("30bfa27e-6b38-4d0a-9ce2-661316", "MYSPORTSFEEDS");
  
  

  msf.getData('nba', '2018-2019-regular', 'player_injuries','json',{}).then(function(data){
    //console.log(msf)
    res.send(data)
    })

    //function(league, season, feed, format, params)

})

router.route("/season").get(function (req,res){

  msf.authenticate("30bfa27e-6b38-4d0a-9ce2-661316", "MYSPORTSFEEDS");
  
  

  msf.getData('nba', '2018-2019-regular', 'seasonal_games','json',{date:'from-today-to-7-days-from-now'}).then(function(data){
    //console.log(msf)
    res.send(data)
    })

    //function(league, season, feed, format, params)

})

router.route("/games").get(function (req,res){

  msf.authenticate("30bfa27e-6b38-4d0a-9ce2-661316", "MYSPORTSFEEDS");
  
  

  msf.getData('nba', '2018-2019-regular', 'daily_games','json',{date:'20181201'}).then(function(data){
    //console.log(msf)
    res.send(data)
    })

    //function(league, season, feed, format, params)

})
  module.exports = router;