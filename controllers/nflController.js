const db = require("../models");
var MySportsFeeds = require("mysportsfeeds-node");

var msf = new MySportsFeeds("2.0", true);


// Defining methods for the bookController
module.exports = {



  findById: function(req, res) {

    msf.authenticate("30bfa27e-6b38-4d0a-9ce2-661316", "MYSPORTSFEEDS");

    msf.getData('nfl', '2018-2019-regular', 'game_playbyplay','json',{game:req.params.id})
      .then(function(data){
        res.send(data)
        })
      .catch(err => res.status(422).json(err));


  },

};
