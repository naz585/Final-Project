const router = require("express").Router();
const nbaScraper = require("../../controllers/nbaScraperController");


router.route("/")
  .get(nbaScraper.nbaScrapelines)


  module.exports = router;