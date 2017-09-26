// JavaScript File
// Assigning a function to the variable makes it an object.

function FizzBuzz(num){
    
    var result = ((num % 3 === 0) ? "Fizz" : "") + ((num % 5 === 0) ? "Buzz" : "");
    return (result == "") ? num : result;
}



