/**
 * http://usejsdoc.org/
 */

var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');

chai.use(chaiAsPromised);

var expect = chai.expect;

var assert = chai.assert;
var should = chai.should();
var updateSearchPO=require('../pageObject/updateSearch.js');
updateSearch=new updateSearchPO();

module.exports = function() {
//Perform next search and Enter "london" in search box
this.When(/^Perform next search and Enter "([^"]*)" in search box$/, function(task){
	updateSearch.updateSearchBar(task);
});

//Select check in date
this.When(/^Select check in date$/,function(){
	updateSearch.selectCheckInDate();
});

// Select check out date of new search
this.When(/^Select check out date of new search$/, function(){
	updateSearch.selectCheckOutDate();
});

//Click on update search button
this.When(/^Click on update search button$/, function(){
	updateSearch.clickOnUpdateButton();
});

//Verify it populates list of hotels
this.Then(/^Verify it populates list of hotels$/,function(){
     
expect(updateSearch.verifyHotelList()).to.eventually.equal('500 Hotels');
});
};