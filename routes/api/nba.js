const router = require("express").Router();
const nba = require("../../controllers/nbaController");


router.route("/")
  .get(nba.nbaApi)


  module.exports = router;