var nbaScrape = require("../Scripts/nbaScraper");

module.exports = {
    nbaScrapelines: function(req, res) {
      return nbaScrape()
        .then(function(nbaLines) {
          return res.json(nbaLines);
        })
    }}