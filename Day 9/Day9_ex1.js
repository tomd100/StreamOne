// JavaScript File

var profile = "I am a web developer develloping in html css javascript";
var stops = ["I", "am", "a", "and"];

var newArray = profile.split(" ");
var outputArray = []

for(var counter1 = 0; counter1 < newArray.length; counter1++){
    
    var word1 = newArray[counter1]
    var word2 = "";
    
    var deleteWord = 0;
    
    for(var counter2 = 0; counter2 < stops.length; counter2++){
        word2 = stops[counter2];
        if (word1.toLowerCase() === word2.toLowerCase()){
            deleteWord = 1;
        }
    }
    
    if(deleteWord === 0){
        outputArray.push(word1)
    }
}
console.log(outputArray);
    


