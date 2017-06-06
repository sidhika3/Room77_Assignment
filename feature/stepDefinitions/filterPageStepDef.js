/**
 * http://usejsdoc.org/
 */
var filterPagePO=require('../pageObject/filterPage.js');
var filterPage=new filterPagePO();


module.exports = function() {
//Should enter brand as Best Western
this.When(/^Should enter brand as Best Western$/,function(){
	filterPage.selectBrand();
});

//Should enter number of ratings
this.When(/^Should enter number of ratings$/,function(){
	filterPage.selectRating();
});

//Should check if listed hotels satisfies the criteria or not
this.Then(/^Should check if listed hotels satisfies the criteria or not$/,function(){
	filterPage.verifyCriteria();
});
};