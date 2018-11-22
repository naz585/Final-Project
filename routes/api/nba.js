const router = require("express").Router();
const axios = require("axios")
const bookController = require("../../controllers/nflController");

var MySportsFeeds = require("mysportsfeeds-node");

var msf = new MySportsFeeds("2.0", true);


// Matches with "/api/books"
/*router.route("/")
  .get(nflController.findAll)
  .post(nflController.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(nflController.findById)
  .put(nflController.update)
  .delete(nflController.remove);*/

router.route("/games").get(function (req,res){
    msf.authenticate("30bfa27e-6b38-4d0a-9ce2-661316", "MYSPORTSFEEDS");
    
    

    msf.getData('nba', '2018-2019-regular', 'daily_games','json',{date:'20181121'}).then(function(data){
      //console.log(msf)
      res.send(data)
      })

      //function(league, season, feed, format, params)

})


module.exports = router;

//return this.baseUrl + '/' + league + '/' + season + '/date/' + params['date'] + '/games.' + format;