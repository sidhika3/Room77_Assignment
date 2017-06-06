/**
 * http://usejsdoc.org/
 */

var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');

chai.use(chaiAsPromised);

var expect = chai.expect;

var assert = chai.assert;
var should = chai.should();
var sortingOrderPO=require('../pageObject/sortingOrder.js');
var sortingorder=new sortingOrderPO();

module.exports = function() {
//Verify the default sorting order is Distance
this.Then(/^Verify the default sorting order is Distance$/, function() {

expect(sortingorder.verifySortingOrder()).to.eventually.equal('Distance');
	

});

//Change sort order to price  
this.Then(/^Change sort order to price$/,function(){
	sortingorder.changeSortingOrder();
});

this.Then(/^Check if hotels are sorted by price$/,function(){
	browser.waitForAngular();
	 //browser.wait(protractor.wait(protractor.ExpectedConditions(,6000)))
	expect(sortingorder.verifySortingOrder1()).to.eventually.equal('Price');
	
});
};