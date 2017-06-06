var homePO = require('../pageObject/homePage.js');
home = new homePO();

var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');

chai.use(chaiAsPromised);

var expect = chai.expect;

var assert = chai.assert;
var should = chai.should();

module.exports = function() {
	this.Given(/^I go to homepage$/, function() {
		browser.get('https://www.room77.com/').then();
		browser.waitForAngular();
	});

	// Enter "Argentina" in the search box
	this.When(/^Enter (.*) in the search box$/, function(place) {
		home.searchBar(place);
		home.selectSearchElement();
	});
}
