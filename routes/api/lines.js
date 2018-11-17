const router = require("express").Router();
const scraper = require("../../controllers/scraperController");


router.route("/")
  .get(scraper.scrapelines)


  module.exports = router;