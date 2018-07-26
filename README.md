
Mocha, Chai, Supertest step-by-step documentation guide
1. Download and install the Visual Studio Code IDE
2. Open Visual Studio Code, click ‘View’ and click ‘Integrated Terminal’
3. Click on the Terminal tab 
4. From the terminal, create a directory/folder for your project:
a. Command: mkdir supertest_practice_framework
5. From the terminal, cd into the new directory:
a. Command: cd supertest_practice_framework/ 
6. Use the following command to create the package.json file which will contains all of the dependencies/node libraries we will use in this project
a. Command: npm init
b. The terminal will give you options to set up values in the package.json file, you can press Enter to select the default options, just make sure you type ‘./node_modules/.bin/mocha’ for the “test command:” option as shown below, then hit Enter when asked “Is this ok?”
7. From the terminal, install all the dependencies/libraries we need using the following command:
a. Command: npm install mocha chai supertest should --save-dev
8. From the terminal, create a new folder called ‘test’
a. Command: mkdir test
9. From Visual Studio Code, select File -> Add Folder To Workspace and then select the folder you created for your project so it is imported into the IDE
10. Right click on the test folder from the EXPLORER on the left hand side and select New File
a. Name the file: get_posts_test.js
11. Paste the following test code into the file:
 
var supertest = require('supertest');
var should = require('should');
var baseUrl = supertest.agent("https://jsonplaceholder.typicode.com");
 
describe('GET /posts tests', function () {
 
   it('should return a 200 response', function (done) {
 
       baseUrl
           .get("/posts")
           .end(function (err, res) {
               res.status.should.equal(200);
               done();
           });
       });
   });
 
12. From the terminal on the Visual Studio Code IDE, type the following command to execute the test
a. Command: npm test
