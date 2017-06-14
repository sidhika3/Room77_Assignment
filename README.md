### Cucumber Installation Steps

First if you are in globant network do the following proxy settings:-

In command prompt :-

* npm config set proxy http://proxy.corp.globant.com:3128
* npm config set https-proxy http://proxy.corp.globant.com:3128
* npm config set strict_ssl false

### Install the NVM tool as instructed below:

Click Here :-

* [NVM install For Windows](https://github.com/coreybutler/nvm-windows/releases)
* [NVM install For Ubuntu](https://nodesource.com/blog/installing-node-js-tutorial-using-nvm-on-mac-os-x-and-ubuntu/)

* To add support for an additional node version type nvm install
* To switch to a different node version type nvm use
* To see what node versions you already have type nvm ls
    

### Installing dependencies

* nvm use 7.8.0
* npm install
* cd node_modules/.bin
* webdriver-manager update (on Linux/Mac run nvm)
* To get the dependencies/packages downloaded in your project structure use this command :- npm install

### For Project Directory Structure follow the instruction below this:-

* Clone the folder in your system

### To Run Testcase

* To Run Testcase use this command :- node node_modules\protractor\bin\protractor config.js 
     OR 
* nvm test

### To Skip Testcase

* In case some test should not run because of bug or any other reasonable reason tag “@skip” should be added to feature file There should be a link to bug ticket or comment why the test is skipped

