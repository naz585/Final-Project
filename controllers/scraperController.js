var scrape = require("../Scripts/lineScraper");


module.exports = {
    scrapelines: function(req, res) {
      return scrape()
        .then(function(lines) {
          console.log(lines);
        })
    }}