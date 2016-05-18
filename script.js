// 'use strict'; //strict mode: catch silly errors

// var names = ['Alice', 'Bob', 'Charles', 'Debbie', 'Edward', 'Fred'];


// //fxn version
// function sayHello(name) { 
//    console.log("Hello, "+name);
// };
// //calls the given function with param "world"
// function doWorld(aFunction) {
//    aFunction("world");
// };
// //call function and pass function
// doWorld(sayHello); //prints "Hello world"
// //pass literal (anonymous value)
// doWorld(function(msg) {
//   console.log("you said: "+msg);
// }); //prints "you said: world"

// /* note where parentheses and braces 
//    close! */
   
//  function sayBye(name){
// 	   console.log("Bye, "+name);
//  };
//  doWorld(sayBye);
 
//  function repeat(msg){
// 	 console.log("you said: "+msg);
//  };
 
//  //if had var repeat = function(string){
// // 	 console.log("you said: "+msg);
// //  }; then doWorld(repeat) is equivalent to:
//  doWorld(function repeat(msg){
// 	 console.log("you said: "+msg);
//  });
 
//   //anonymous function syntax
// var doAtOnce = function(funcA, funcB) {
//     funcA();
//     console.log(' and ');
//     funcB();
//     console.log(' at the same time! ');
// }

// var patHead = function(name) {
//     console.log("pat your head");
// }

// var rubBelly = function(name) {
//     console.log("rub your belly");
// }

// doAtOnce(patHead, rubBelly);
// //doAtOnce(sayHello, sayBye); --> Hello, undefined and Bye, undefined

////Iterate through an array
// var array = ['a','b','c'];
// var printItem = function(item) {
//    console.log(item);
// }

// array.forEach(printItem);

// //more common to use anonymous function
// array.forEach(function(item) {
//    console.log(item);
// });

var numbers = [2,0,6,6,8,5,1,6,2,2];

//Use a forEach loop to sum up the numbers 
//in the array. Log out this sum.
//Think about how you would do this in Python!
var sum = 0;
numbers.forEach(function(item){
  sum += item
});

console.log(sum);

//Extra: use a forEach loop to find the 
//biggest number in the array. Log out this number

// var big = 0;
// numbers.forEach(function(item){
//   if (item > big) {
//     big = item;
//   }
// });

// console.log(big);

var max = numbers[0];
numbers.forEach(function(num){
  if(num > max) {
    max = num
  }
});
console.log(max);

var textElem = jQuery('#text');

console.log(textElem);