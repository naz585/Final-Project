var Games = require("../Scripts/nbaApi");


module.exports = {
    nbaApi: function(req, res) {
      return Games()
        .then(function(games) {
          return res.json(games);
        })
    }}