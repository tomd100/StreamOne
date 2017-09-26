var poetry="nancy";


// the variable in this function only exists within the scope of the function
// putting all functions in here we will not be able to polute the scope. 
(function main() {
    var poetry = "Vogon";
    console.log("self executing function");
})()

// the variable in this function only exists within the scope of the function
function main(){
    var poetry = "Grunthos and FLatulent";
    console.log("regular function");
}

main();
console.log(poetry);

// if you create functions within the annonimos functions you can access them by attaching the functions to the document object 
// (ie. make them methods of the document object)
