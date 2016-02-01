var request = require('request');

function getPmcXml(pmcId) {
  request('http://www.google.com', function (error, response, body) {
    if (!error && response.statusCode == 200) {
      console.log(body) // Show the HTML for the Google homepage.
    }
  })
}

module.exports = getPmcXml;
