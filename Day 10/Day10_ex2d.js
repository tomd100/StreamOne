// JavaScript File

/*
Write a function that takes a character (i.e. a string of length 1) and prints a message to say whether
the letter is a vowel or not.

So, calling is_vowel("a") will return:

a is a vowel

Calling is_vowel("s") will return:

s is not a vowel

create a string to hold all the vowels
check whether the input char is in this string
if it is, return "it's a vowel" otherwise return "it's not a vowel"

could add a check that the input char is one char only - if not take just 
the first char in the string


*/

function is_vowel(charInput){
    
    var vowels = "aeiou";
    
    if(charInput.length > 1){
        charInput = charInput.slice(0, 1);
    }
 
    if (vowels.indexOf(charInput) === -1){
        console.log(charInput + " is not a vowel");
    }else{
        console.log(charInput + " is a vowel");
    }
    return
}    
    
is_vowel("a")     
is_vowel("e")     
is_vowel("i")     
is_vowel("o") 
is_vowel("u")     
is_vowel("s")
is_vowel("t")     

is_vowel("twewew")     
is_vowel("atwewew")     
