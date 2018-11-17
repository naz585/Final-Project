const cheerio = require("cheerio");
const axios = require("axios");



var scrape = function() {
  

return axios.get("http://m.espn.com/nfl/dailyline?wjb").then(function(response) {
  var $ = cheerio.load(response.data);

  var nflResults = [];

  $("tr").each(function(i, element) {

    var matchups = $(element).text();

    nflResults.push({
      matchups: matchups,
    });

  });
  return nflResults;
});

//  axios.get("http://m.espn.com/nba/dailyline?wjb").then(function(response) {
  
//     var $ = cheerio.load(response.data);
//     var nbaResults = [];
//     $("tr").each(function(i, element) {
  
//       var matchups = $(element).text();
  
//       nbaResults.push({
//         matchups: matchups,
//       });
//     });
//     return nbaResults
//   })

}

module.exports = scrape;