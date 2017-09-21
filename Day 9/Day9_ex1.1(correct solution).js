// JavaScript File

var profile = "I am a web developer develloping in html css javascript";
var stops = ["i", "am", "a", "and"];

var profileWords = profile.split(" ");
var newProfile = [];

for (var i = 0; i < profileWords.length; i++){
    if(stops.indexOf(profileWords[i].toLowerCase()) === -1){
        newProfile.push(profileWords[i]);
    }
}

console.log(newProfile);




