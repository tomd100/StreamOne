// JavaScript File


/*
Define a function new_max() that takes three numbers as arguments and returns the largest 
of them. Use the if-then-else construct available in Javascript.

So, calling: new_max(10,2,4) will return:

10

----------------------------------------------------------

can be done using nested if, else...or with a variable such as maxNum. Using vairiable:
compare num1 with num2. If num1 is bigger or equal to num2, make the maxNum = num1
otherwise make the maxNum equal to num2

repeat the if statement for maxNum and num3
If maxNum is bigger or equal to num2 return maxNum
otherwise return num3

*/


function new_max(num1, num2, num3){
    
    var maxNum = 0
    
    if (num1 >= num2){
        maxNum = num1;
    }else{
        maxNum = num2;
    }
    
    if (maxNum >= num3){
        console.log(maxNum);
    }else{
        console.log(num3);
    }
    return
}


new_max(10,2,4)
new_max(10,20,4)
new_max(10,2,40)
new_max(10,10,10)
