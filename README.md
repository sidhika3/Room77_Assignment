### Cucumber Installation Steps

First if you are in globant network do the following proxy settings:-

In command prompt :-

* npm config set proxy http://proxy.corp.globant.com:3128
* npm config set https-proxy http://proxy.corp.globant.com:3128
* npm config set strict_ssl false

### Install the NVM tool from here

Click Here :-
NVM install For Windows
NVM install For Ubuntu

   * To add support for an additional node version type nvm install
   * To switch to a different node version type nvm use
   * To see what node versions you already have type nvm ls
    

### Installing dependencies

    * nvm use 7.8.0
    * npm install
    * cd node_modules/.bin
    * webdriver-manager update (on Linux/Mac run nvm)

    
    * To get dependencies downloaded in your project structure use this command :- npm install.
   

### For Project Directory Structure follow this:-

    * Create folder " features " in your project.
    * Create file as “test.feature” under folder “features”.
    * Create folder “stepDefinitions” under “features” folder.
    * Create java Script file under folder “stepDefinitions” and name it as stepDefinition.js

    * In terminal navigate to webdriver-manager in node_modules directory & run update command: ~/workspace/MyPro/node_modules/protractor/bin$ node webdriver-manager update

    * Subsequently start the webdriver-manager: ~/workspace/MyPro/node_modules/protractor/bin$ node webdriver-manager start


### To Run Testcase

    * To Run Testcase use this command :- node node_modules\protractor\bin\protractor config.js or if you have written script like this:-
    ```
    "scripts": {
	 
	  "test": "node node_modules\\protractor\\bin\\protractor config.js"
  }
```
    then use this command:- nvm test

### To Skip Testcase

    * In case some test should not run because of bug or any other reasonable reason tag “@skip” should be added to feature file There should be a link to bug ticket or comment why the test is skipped

