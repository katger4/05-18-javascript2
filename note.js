//Numbers
var x = 4;
var y = 1.5;

//Strings
var message = 'Hello world';

//Booleans
var hasSlept = false;

//Arrays
var names = ['John', 'Paul', 'George', 'Ringo'];

//Objects
var ages = {alice: 42, bob: 35, charles: 13};

Conditionals:
if(temp > 70 && temp <= 80) {
   console.log("What a nice day!");
   console.log("Go outside and enjoy it!");
}
Loops:
var count = 5;
while(count > 0){
   console.log(count);
   count = count - 1;
}
console.log("Blastoff!");
for(var i=0; i<array.length; i++){
    console.log(array[i]);
}

Functions:
//general syntax
function methodName(params){
    //...statements
}
function sayHello(name) {
   console.log('Hello '+name);
   console.log('Nice to meet you!');
}

// optional-ness of params: If a func has a param, that doesn't mean it got a value.
// If a func doesn't have a param, that doesn't mean it didn't get a value.
//local var "name"
    function sayHello(name) {
        return "Hello, "+name;
    }

    //expected; parameter is assigned a value
    sayHello("Joel"); //"Hello, Joel"

    //paramer not assigned value (left undefined)
    sayHello(); //"Hello, undefined"

    //extra parameters (values) are not assigned to variables, so are ignored
    sayHello("Joel","y'all"); //"Hello, Joel"

"Functions are Objects"
    // Functions are a type of value (just like Number, String, Array).
    // Anywhere you can put an Array, you can put a Function.

    //assign array to variable
    var myArray = ['a','b','c'];

    var other = myArray;

    //access value in other
    console.log( other[1] ); //print 'b'

    //assign function to variable
    function sayHello(name) { 
       console.log("Hello, "+name);
    }

    var other = sayHello;

    //prints "Hello, everyone"
    other('everyone'); 

Anonymous Variables = "An anonymous variable is a value to which we don''t assign a name/label (variable) to"
    var array = [1,2,3]; //named variable (not anonymous)
    console.log(array); //pass in named var

    console.log( [4,5,6] ); //pass in anonymous value

    //named function
    function sayHello(person){ 
       console.log("Hello, "+person); 
    }

    //anonymous function (no name!)
    function(person) {
       console.log("Hello, "+person);
    }

    //anonymous function (value) assigned to variable
    var sayHello = function(person) {
       console.log("Hello, "+person);
    }

Functions are Objects: So they can be assigned as values to variables
var obj = {};
var myArray = ['a','b','c'];

//assign array to object
obj.array = myArray;

//access with dot notation
obj.array[0]; //gets 'a'

//assign literal (anonymous value)
obj.otherArray = [1,2,3]

//empty object, creat fxn. assign f to o, access with dot notation (creating objects with methods associated ~ class in python)
var obj = {}
function sayHello(name) { 
   console.log("Hello, "+name);
}

//assign function to object
var obj.sayHi = sayHello;

//access with dot notation
obj.sayHi('all'); //prints "Hello all"

//assign literal (anonymous value)
obj.otherFunc = function() { 
    console.log("Hello world!"); 
}    ^how we make classes

Functions are Objects: So they can be passed as parameters to other functions!

var myArray = ['a','b','c'];
//access array item with index 1 (oneth item)
function doOneth(array) {
  console.log( array[1] );
}
//call function and pass array
doOneth(myArray); //prints 'b'
//pass literal (anonymous value)
doOneth([1,2,3]) //prints '2'

//fxn version
function sayHello(name) { 
   console.log("Hello, "+name);
}
//calls the given function with param "world"
function doWorld(aFunction) {
   aFunction("world");
}
//call function and pass function
doWorld(sayHello); //prints "Hello world"
//pass literal (anonymous value)
doWorld(function(msg) {
  console.log("you said: "+msg);
}); //prints "you said: world"

/* note where parentheses and braces 
   close! */
   
 function sayBye(name){
	   console.log("Bye, "+name);
 };
 doWorld(sayBye);
 
//when input function variable NOT calling it!! 

 doWorld(sayBye()); //actually calling it --> returns NOTHING bc undefined
 
Array Iteration: To iterate through each item in an array (like with for...in), use the forEach function and pass it a function to call on each item in the array.

//Iterate through an array
var array = ['a','b','c'];
var printItem = function(item) {
   console.log(item);
}

array.forEach(printItem); <-- vs for index in range of length of array (with all the i''s), this iterates thru all *values*

//more common to use anonymous function
"array: for each thing do function on item"
array.forEach(function(item) {
   console.log(item);
});

The .map() method applies the function to each element in an array and returns a new array of the elements returned by the function.
Similar to a Python list comprehension (https://docs.python.org/3/tutorial/datastructures.html#list-comprehensions).

var array = [1,2,3];
var timesTwo = function(n) { 
   return n*2; 
};

array.map(timesTwo); //returns [2,4,6]

//more common to do this inline:
array.map(function(n) {
   return n*2;
});

The .filter() method applies the function to each element in an array and returns a new array containing only the elements for which the function returns true

var array = [3,1,4,2,5];

var isACrowd = array.filter(function(n) { 
   return n >= 3;
}); //returns [3,4,5]

jQuery: A JavaScript Library ("helper methods") for working with the DOM... and more!
  importing JQ: 
    offline: <script src="lib/jquery-2.2.3.js"></script>
    req''s internet access: <script src="https://code.jquery.com/jquery-2.2.3.min.js"></script>
  This creates a jQuery variable in global scope

jQuery Selector Function: 

  Use the jQuery() function to access HTML elements in the DOM. Parameter is a String of a CSS selector.
    //selects element with id="foo" (e.g., <p id="foo">)
    var fooElem = jQuery('#foo'); 

    //selects all <a> elements (returns an array)
    var allLinks = jQuery('a');

  More common to use the $() shortcut alias:
    //selects element with id="foo" (e.g., <p id="foo">)
    var fooElem = $('#foo'); 

    //selects all <a> elements (returns an array)
    var allLinks = $('a');

jQuery Methods: We can call functions on the resulting jQuery element in order to manipulate the web page content!
//selects element with id="foo" (e.g., <p id="foo">)
var fooElem = jQuery('#foo'); 

//gets the HTML content (stuff between the tags)
var content = fooElement.html();
console.log(content.toUpperCase(); //for example

//replaces the HTML content with new HTML
fooElement.html("<em>New content!</em>");

//adds new HTML content to end of existing
fooElement.append('And more stuff!');

//removes any HTML content
fooElement.clear();

var text = $('#text');
undefined
text.html()
"Here's some text: lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque quae sit autem minus. Eaque magni est, eligendi suscipit, maiores esse, distinctio debitis repudiandae rerum non ipsum, dolorem ducimus optio et."

text.html("I changed you!")
[<p id=​"text">​I changed you!​</p>​]
text.html("I changed you again!")
[<p id=​"text">​I changed you again!​</p>​]
text.append("More data")
[<p id=​"text">​…​</p>​]
text.empty()
[<p id=​"text">​</p>​]

Interactivity: Event Handling: We add interactivity by listening for and responding to "events" created by the computer.

  Register a Listener: We call a method on an element to register or attach a "listener" to that method, specifying that we want to do something when that element causes an event.
    //respond to "click" events
    $('#button').click(callback);

  Callback Functions: A function (usually anonymous) that we "call back to" and tell to run when an event is detected.
    $('#button').click(function(event) {
       console.log('clicky clicky!');
       //who was clicked 
       var element = $(event.target);
    });

    $('#text').click(function(event) {
           console.log('clicky clicky!');
          $('#text').append("etc...");
        });

    $('li').click(function(event) {
           var element = $(event.target);
          console.log('You clicked '+element.html());
        });

Tracking State in Event-Driven Programming: We can use global variables to keep track of state (data) between event callbacks
var clickCount = 0; //state variable

$('#button').click(function() {
   clickCount++; //change state (+1)

   if(clickCount > 10){
      console.log("I think you've had enough");
   }
   else {
      console.log('clicky clicky!');
   }
});

Other Events: Some events we can respond to:
  .click()     //mouse or button clicked

  .dblclick()  //double-clicked

  .hover()     //mouse hover

  .focus()     //element gains focus (important!)

  .keydown()   //key is pressed

  .mousedown() //mouse button is pressed

  .mousemove() //mouse is moved

  //... and more!

  $('li').click(function(event) {
         var element = $(event.target);
        console.log('You clicked '+element.html());
        element.fadeOut(500);
      });

For Fun: Effects!
jQuery also lets us add transitions to modify the appearance of elements.
$('#id').fadeIn(1000);   //fade in over 1 second
$('#id').fadeOut(500);   //fade out over 1/2 sec
$('#id').slideDown(200); //slide down over 200ms
$('#id').slideUp(500);   //slide up over 500ms
$('#id').toggle();       //toggle whether displayed

Getting External Data: Web APIs - A web service that provides data in response to HTTP requests 
  
  base URI:
  http://api.github.com
  
  Endpoint:
  /users/:username/repos
  /repos/:owner/:repo
  /search/repositories
  /emojis/

Ajax: A technique for having code (JavaScript) send an HTTP Request, rather than the user (asynchronous)

AJAX with jQuery: We can use jQuery''s $.get() to send an Ajax request.
  (Must be running a web server (localhost) for this to work).
   var url = 'http://api.site.com/endpoint';

   //send request for data to the url, downloads info, and brings it back
   $.get(url);

   //also works for local data files!
   $.get('data/datafile.json');

Asynchronous: Ajax requests are asynchronous, so happen simultaneously with the rest of the code.
That means that after the request is sent, the next line of code is executed without waiting for the request to finish!
   
   1. console.log('About to send request');

   //send request for data to the url
   2. $.get(url); <-- DOES NOT RETURN THE DATA

   3. console.log('Sent request');

   4. Data is actually received some time later!

Promises: Because $.get() is asynchronous, the method returns a Promise. A promise acts as a "placeholder" for the data that will eventually be received from the Ajax request.

  //$.get() returns a Promise
  var thePromise = $.get(url);

  We use the .then() method to specify a callback function to be executed when the promise is fulfilled (when the asynchronous request is finished and data is available)
  //what to do when we get the data
  function myCallback(data) {
     console.log(data);
  }

  //when fulfilled, execute the callback function
  //(which will be passed the fetched data)
  var promise = $.get(url);
  promise.then(myCallback);

  //more common to use anonymous variables/callbacks:
  $.get(url).then(function(data) {
     console.log(data);
  });

Chaining Promises: The . then() method itself returns a Promise containing the value (data) returned by the callback method.
  This allows you to chain callback functions together, doing one after another (but after the Promise is fulfilled!)

  function makeString(data) {
     return data.join(", "); //a value to put in Promise
  }

  function makeUpper(string) {
     return string.toUpperCase(); //a value to put in Promise
  }

  var promiseA = $.get(url); When completed, //promiseA => json data
  var promiseB = promiseA.then(makeString); //promiseB => comma-sep string
  var promiseC = promiseB.then(makeUpper); //promiseC => upper string
  promiseC.then(function(data) {
     console.log(data); //data is uppercase, comma-separated string
  };

  function makeString(data) {
     return data.join(", "); //a value to put in Promise
  }

  function makeUpper(string) {
     return string.toUpperCase(); //a value to put in Promise
  }

  //more common to use anonymous variables:
  $.get(url).then(makeString).then(makeUpper).then(function(d) {
     console.log(d);
  }
