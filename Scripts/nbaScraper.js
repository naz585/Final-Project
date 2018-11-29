const cheerio = require("cheerio");
const axios = require("axios");


var nbaScrape = function() {
return axios.get("http://m.espn.com/nba/dailyline?wjb").then(function(response) {

  var $ = cheerio.load(response.data);

  var nbaResults =[];

  $('tr',).each( (i, elm) => {

    // $(elm).children().first().find('br').replaceWith('&nbsp;vs&nbsp;')
    // $(elm).children().eq(1).first().find('br').replaceWith('/')
    // $(elm).children().eq(2).first().find('br').replaceWith('/')

    nbaResults.push({
      favorite: $(elm).children().first().text(),
      line: $(elm).children().eq(1).first().text(),     
      dog: $(elm).children().eq(2).first().text(),
      total: $(elm).children().eq(3).first().text()
      }
    );
  });
  return nbaResults;
});
}

module.exports = nbaScrape
  