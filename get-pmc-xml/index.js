var request = require('request');

function getPmcXml(pmcId) {

	var	pmcNum=pmcId.slice(3);
	var url1='http://www.ncbi.nlm.nih.gov/pmc/oai/oai.cgi?verb=GetRecord&identifier=oai:pubmedcentral.nih.gov:';
	var url2 = '&metadataPrefix=pmc';
	var url3 = url1 + pmcNum + url2;

  // request(url3, function (error, response, body) {
  //   if (!error && response.statusCode == 200) {
  //     console.log(body) // Show the HTML for the Google homepage.
  //   }
  // })

  return new Promise(function(resolve) {
  	request(url3, function (error, response, body) {
	    if (!error && response.statusCode == 200) {
	      // console.log(body) // Show the HTML for the Google homepage.
	      resolve(body)
	    }
  	})
  })
}

module.exports = getPmcXml;
