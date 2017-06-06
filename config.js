/**
 * http://usejsdoc.org/
 */

exports.config = {

	directConnect : true,
	timeout : 20000,
	framework : 'custom',
	frameworkPath : require.resolve('protractor-cucumber-framework'),
	capabilities : {
		'browserName' : 'chrome'
	},

specs : [ 'feature/*.feature' ],

	cucumberOpts : {

		require : 'feature/stepDefinitions/*.js',

	},
	onPrepare : function() {
             browser.driver.manage().window().maximize();
	}
};