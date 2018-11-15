var cheerio = require("cheerio");
var axios = require("axios");

console.log("nfl game lines");

axios.get("http://m.espn.com/nfl/dailyline?wjb").then(function(response) {

  var $ = cheerio.load(response.data);

  var nflResults = [];

  $("tr").each(function(i, element) {

    var matchups = $(element).text();

    nflResults.push({
      matchups: matchups,
    });
  });
  console.log(nflResults);
  console.log("----------");
});

console.log("nba game lines");

axios.get("http://m.espn.com/nba/dailyline?wjb").then(function(response) {

  var $ = cheerio.load(response.data);
  var nbaResults =[];

  $("tr").each(function(i, element) {

    var matchups = $(element).text();

    nbaResults.push({
      matchups: matchups,
    });
  });
  console.log(nbaResults);
  console.log("----------");
});
