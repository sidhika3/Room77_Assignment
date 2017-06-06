/**
 * http://usejsdoc.org/
 */

var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');

chai.use(chaiAsPromised);

var expect = chai.expect;

var assert = chai.assert;
var should = chai.should();
var viewDetailsPO=require('../pageObject/viewHotelDetailsPage.js');
var viewDetails=new viewDetailsPO();


module.exports = function() {
//Click on the first hotel listed
this.When(/^Click on the first hotel listed$/,function(){
	viewDetails.clickOnHotel();
});
//Verify the address contains London
this.Then(/^Verify the address contains London$/, function(){
	//viewDetails.verifyAddress();
	viewDetails.verifyAddress().then(function(value){
		expect(value).to.contain('London');
		console.log("Address is"+value);
	});
});
// Click on Price tab
this.When(/^Click on Price tab$/,function(){
	viewDetails.clickOnPriceTab();
});
//Verify the lowest price among all deals and the site name is showing at the top
this.Then(/^Verify the lowest price among all deals and the site name is showing at the top$/,function(){
	viewDetails.verifyLowestPrice();
});


//Click the close button and verify it closes the expanded detail of the hotel
this.Then(/^Click the close button and verify it closes the expanded detail of the hotel$/,function(){
viewDetails.clickOnCloseTab();
});	
};