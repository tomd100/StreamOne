// JavaScript File

// Callback structure example

// Imagein that the following function takes a long time to complete. 

function wotDayIsIt(callback){
    var day = (new Date().getDay());
    callback(day)
}

var dayOfWeek = function(day){
    if (day===0||day==6)
        console.log("it's the weekend!");
    else
        console.log("it's not the weekend");
}

wotDayIsIt(dayOfWeek);
console.log("Finished");



