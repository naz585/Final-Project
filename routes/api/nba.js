const router = require("express").Router();

var MySportsFeeds = require("mysportsfeeds-node");

var msf = new MySportsFeeds("2.0", true);

router.route("/games").get(function (req,res){

  msf.authenticate("30bfa27e-6b38-4d0a-9ce2-661316", "MYSPORTSFEEDS");
  
  

  msf.getData('nba', '2018-2019-regular', 'daily_games','json',{date:'20181126'}).then(function(data){
    //console.log(msf)
    res.send(data)
    })

    //function(league, season, feed, format, params)

})
  module.exports = router;