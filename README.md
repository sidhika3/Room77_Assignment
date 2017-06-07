# Room77_Assignment

Cucumber Installation Steps

First if you are in globant network do the following proxy settings:-

    In command prompt :-

1)npm config set proxy http://proxy.corp.globant.com:3128
2)npm config set https-proxy http://proxy.corp.globant.com:3128
3)npm config set strict_ssl false

Step 1)Download node.js to your system https://nodejs.org/en/download/ or in case of Eclipse , install Nodeclipse 1.0.2 from Eclipse Marketplace.

Step 2)To get package.json file in your project structure use this command is:-npm init

Step 3)To get node-modules folder in your project structure use this command :- npm install.

Step 4)Add following dependencies in the package.json

"devDependencies": {
   "protractor": "^5.0.0",
   "cucumber": "~1.2.1",
   "protractor-cucumber-framework": "^0.6.0"
 }

Step 5)Update your package.json file.Right click on package.json ->Run As ->npm install.

Step 6)

    Create folder " features " in your project.
    create file as "test.feature" under folder "features".
    then create folder "stepDefinitions" under "features" folder.
    then create java Script file under folder "stepDefinitions" and named it as stepDefinition.js

Step 7) In eclipse terminal navigate to webdriver-manager in node_modules directory & run update command:
~/workspace/MyPro/node_modules/protractor/bin$ node webdriver-manager update

Subsequently start the webdriver-manager:
~/workspace/MyPro/node_modules/protractor/bin$ node

Step 8)To run your script use this command :- node node_modules\protractor\bin\protractor config.js
