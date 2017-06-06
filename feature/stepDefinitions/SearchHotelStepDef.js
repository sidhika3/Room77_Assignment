/**
 * http://usejsdoc.org/
 */

var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');

chai.use(chaiAsPromised);

var expect = chai.expect;

var assert = chai.assert;
var should = chai.should();
var SearchHotelPO=require('../pageObject/SearchHotel.js');
searchhotel=new SearchHotelPO();


module.exports = function() {
//Verify Check-in section is highlighted
this.When(/^Verify Check-in section is highlighted$/, function() {
	//expect(searchhotel.checkInHighlighted()).to.exist;
	  
});

//Select tomorrow's date as check-in date
this.When(/^Select tomorrow's date as check-in date$/, function(){
	searchhotel.selectTommorrowDate();
});

//Select date after two weeks as check-out date
this.When(/^Select date after two weeks as check-out date$/,function(){
	searchhotel.selectCheckOutDate();
});

// Select as "4" number of guests
this.When(/^Select as "([^"]*)" number of guests$/,function(task){
	searchhotel.selectNoOfGuests(task);
});

//Select as "2" number of rooms
this.When(/^Select as "([^"]*)" number of rooms$/,function(task){	
	searchhotel.selectNoOfRooms(task);
});

// Click on search button
this.When(/^Click on search button$/,function(){
	searchhotel.clickOnSearch();
});

//Verify the list of hotels gets populated
this.Then(/^Verify the list of hotels gets populated$/, function(){  
	
	expect(searchhotel.verifyHotelList()).to.eventually.equal('1 Hotels');
});
}