var getPmcXml = require('./get-pmc-xml');
var assert = require('assert');

var myPromise = getPmcXml("PMC3594181");

// console.log(myPromise);
// myPromise.then(function(blueberries) {
// 	console.log(blueberries);
// })

myPromise.then(function(data) {
	console.log(data)
	return "whatever"
}).then(function(data) {
	console.log(data)
})