/* Callback functions:
Function thats executed after another function has finished execution.
\ A more formal definition would be - Any function that is passed as 
an argument to another function so that it can be executed in that other
 function is called as a callback function */

// example 3 seconds violation in basketball .. if stay in lane more than 3 seconds > 3 second violation
console.log("You have 3 seconds to get out the lane");
const message = function () {
  console.log("Violation!!");
};

setTimeout(message, 3000);
