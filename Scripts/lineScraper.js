const cheerio = require("cheerio");
const axios = require("axios");



var scrape = function() {
  

return axios.get("http://m.espn.com/nfl/dailyline?wjb").then(function(response) {
  var $ = cheerio.load(response.data);

  var nflResults = [];
  $('tr',).each( (i, elm) => {


    nflResults.push( {
      first: $(elm).children().first().text(),
      second: {
        sell: $(elm).children().eq(1).first().text(),
        
      },
      third: {
        sell: $(elm).children().eq(2).first().text(),
       
      },
      fourth: {
        sell: $(elm).children().eq(3).first().text(),
        
      }
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