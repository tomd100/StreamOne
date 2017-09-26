// JavaScript File
// Assigning a function to the variable makes it an object.

var Calculator = function(){
    this.value=0;
};

Calculator.prototype.start = function(numberIn){
    if(typeof(numberIn) == "number"){
        if(this.value == 0){
            this.value = numberIn;
        } else {
            this.value = 0;    
        }
    } else {
        alert("Agument must be a number!");
    }
};

Calculator.prototype.add = function(numberIn){
    if(typeof(numberIn) == "number"){
        if(this.value == 0){
            this.value = numberIn;
        } else {
            this.value = this.value + numberIn;    
        }
    } else {
        alert("Agument must be a number!");
    }
};

Calculator.prototype.sub = function(numberIn){
    if(typeof(numberIn) == "number"){
        if(this.value == 0){
            this.value = numberIn;
        } else {
            this.value = this.value - numberIn;    
        }
    } else {
        alert("Agument must be a number!");
    }
};

Calculator.prototype.mul = function(numberIn){
    if(typeof(numberIn) == "number"){
        if(this.value == 0){
            this.value = numberIn;
        } else {
            this.value = this.value * numberIn;    
        }
    } else {
        alert("Agument must be a number!");
    }
};

Calculator.prototype.div = function(numberIn){
    if(typeof(numberIn) == "number"){
        if(this.value == 0){
            this.value = numberIn;
        } else {
            if(numberIn == 0){
                alert("Cannot divide by zero!")
            } else {
                this.value = this.value / numberIn;    
            }} 
        } else {
                alert("Agument must be a number!");
        }        
};


