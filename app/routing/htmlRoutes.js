var path = require('path');

module.exports = {
  home: function (req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
  },

  survey: function (req, res) {
    res.sendFile(path.join(__dirname, "../public/survey.html"));
  }
};