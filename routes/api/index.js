const path = require("path");
const router = require("express").Router();
const bookRoutes = require("./books");
const googleRoutes = require("./google");
const linesRoutes = require("./lines")
const nbaRoutes = require("./nba")
const nflRoutes = require("./nfl")

// Book routes
router.use("/books", bookRoutes);

// Google Routes
router.use("/google", googleRoutes);

router.use("/lines", linesRoutes);

router.use("/nba", nbaRoutes);
router.use("/nfl", nflRoutes);


// For anything else, render the html page
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../../client/build/index.html"));
});

module.exports = router;
