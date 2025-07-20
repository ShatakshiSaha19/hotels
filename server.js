// function add(a,b){
//   return a+b;
// }
// var add=function (a,b){
//   return a+b;
// }
// var add=(a,b)=>{return a+b};
// var add=(a,b)=>a+b;
// var result=add(51,10);
// console.log( result);

// (function(){
//   console.log("I am an IIFE");
// })();
// function callback(){
//   console.log("its callback function");
// }
//const add=function(a,b,callback){
//   result=a+b;
//   console.l og("The result is: " + result);//main function work complete
//   callback();
// }
// add(5,10,callback);
//Inline callback function :-
// const add = function(a, b, callback) {
//   var result = a + b;
//   console.log("The result is: " + result); // main function work complete
//   callback();
// }
// add(5, 10, function() {
//   console.log("This is an inline callback function");
// });
// add(5, 10, () => {
//   console.log("This is an inline callback function");
// });
// var fs=require('fs');
// var os=require('os');
// var user=os.userInfo();
// console.log(user);
// console.log(user.username);


// fs.appendFile('greeting.txt','Hi '+user.username+'!\n',()=>{
//   console.log('File created');
// })//3 arguments-file path,data,callbackfunction


// // //to know what os can do i.e. to know all its functionalities
// // console.log(os); 
// const notes = require('./notes.js');
// //lodash -data manipulation library
// var _ =require('lodash');//this is the repreesentation of lodash library using"_" other name can also be given......just a convention
// console.log('server file is available');

// var age=notes.age;
// var result =notes.addNumber(age,10);
// console.log(age);
// console.log(result);

// var data=["person","person",1,2,1,2,'name','name'];
// var filter=_.uniq(data);//to remove duplicate values from the array
// console.log(filter);

// console.log(_.isString(true));//to check whether the value is string or not





//LECTURE 2 
//client sends request through web browser ....and node js brings the response


const express = require('express')
const app = express()
const db = require('./db.js'); // Import the database connection....this should be at the top of the file to ensure the database is connected before handling requests
//require('dotenv').config(); // Load environment variables from .env file
const PORT = process.env.PORT || 3000; // Use the port from environment variables(provided by online hosting platform) or default to 3000(localhost)

const bodyParser = require('body-parser');
 app.use(bodyParser.json())//req.body
  // Middleware to parse JSON request bodies


app.get('/', function(req, res) {
  res.send('Hello World!')
})//two arguments-1st is the endpoint,2nd is the callback function.....if anyone will go to adress with"/" at last...it will get the response "Hello World!"..if "/" is not there then also get the response

// app.get('/chicken',(req,res)=>{
//   res.send('Chicken is tasty');
// })
// app.get('/idli',(req,res)=>{
//   var customixed_idli={
//     name: 'idli',
//     price: 20,
//     isSambar:true,
//     type: 'south indian'
//   }
//   res.send(customixed_idli);//get json response
// })
// app.post('/person',(req,res)=>{
//   res.send('succesful');
// })





//IMPORT THE ROUTER FILE 

const personRoutes = require('./routes/personRoutes.js');
const menuItemRoutes = require('./routes/menuItemRoutes.js');
//Use the routes 
app.use('/person', personRoutes); 

app.use('/menu', menuItemRoutes); // Use the menu item routes



app.listen(3000,()=>{
  console.log('Example app listening on port 3000!')
})//to check server is live or not 

//ctrl+c -----to stop the server
//to run the server file use command "node server.js" in terminal or nodemon server.js