const router = require("express").Router();
const nflController = require("../../controllers/nflController");

var MySportsFeeds = require("mysportsfeeds-node");

var msf = new MySportsFeeds("2.0", true);

router.route("/games").get(function (req,res){

  msf.authenticate("30bfa27e-6b38-4d0a-9ce2-661316", "MYSPORTSFEEDS");
  msf.getData('nfl', '2018-2019-regular', 'daily_games','json',{date:'20181125'}).then(function(data){
    //console.log(msf)
    res.send(data)
    })

    //function(league, season, feed, format, params)

})



router.route('/gamesInfo/:id')
  .get(nflController.findById)

  module.exports = router;

