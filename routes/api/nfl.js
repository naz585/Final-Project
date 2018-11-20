const router = require("express").Router();
const axios = require("axios")
const bookController = require("../../controllers/nflController");

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

router.route("/scores").get(function (req,res){
  //fetch scores
  axios.get("https://api.sportradar.us/nfl/official/trial/v5/en/games/2018/REG/1/schedule.json?api_key=w56j7gj9dkds75pmhdatmd34").then(function(data){
    console.log(data)
  res.send(data.data)
  })
})


module.exports = router;
