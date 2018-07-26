Mocha, Chai, Supertest step-by-step getting started guide
Download and install the Visual Studio Code IDE
Open Visual Studio Code, click ‘View’ and click ‘Integrated Terminal’
Click on the Terminal tab
From the terminal, create a directory/folder for your project: mkdir supertest_practice_framework
From the terminal, cd into the new directory: cd supertest_practice_framework/
Use the following command to create the package.json file which will contains all of the dependencies/node libraries we will use in this project. Command: npm init 
The terminal will give you options to set up values in the package.json file, you can press Enter to select the default options, just make sure you type ‘./node_modules/.bin/mocha’ for the “test command:” option, then hit Enter when asked “Is this ok?”
From the terminal, install all the dependencies/libraries we need using the following command: npm install mocha chai supertest should --save-dev
From the terminal, create a new folder called ‘test’: mkdir test
From Visual Studio Code, select File -> Add Folder To Workspace and then select the folder you created for your project so it is imported into the IDE
Right click on the test folder from the EXPLORER on the left hand side and select New File. Name the file: get_posts_test.js
Paste the following test code into the file:
var supertest = require('supertest'); 
var should = require('should'); 
var baseUrl = supertest.agent("https://jsonplaceholder.typicode.com");
describe('GET /posts tests', function () {

it('should return a 200 response', function (done) {
   baseUrl.get("/posts").end(function (err, res) {                    res.status.should.equal(200);           
 done();      
    });  
  });
});
From the terminal on the Visual Studio Code IDE, type the following command to execute the test: npm test
