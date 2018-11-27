const cheerio = require("cheerio");
const axios = require("axios");



var scrape = function() {
  

return axios.get("http://m.espn.com/nfl/dailyline?wjb").then(function(response) {
  var $ = cheerio.load(response.data);

  var nflResults = [];
  $('tr',).each( (i, elm) => {
    $(elm).children().first().find('br').replaceWith('&nbsp;vs&nbsp;')
    $(elm).children().eq(1).first().find('br').replaceWith('/')
    $(elm).children().eq(2).first().find('br').replaceWith('/')

    nflResults.push( {
      teams: $(elm).children().first().text(),
      spreads: {
        spread: $(elm).children().eq(1).first().text(),     
      },
      mls: {
        ml: $(elm).children().eq(2).first().text(),
      },
      totals: {
        total: $(elm).children().eq(3).first().text(),
        
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