// JavaScript File

/*
Write a function that writes the multiplication table 
(in one column) of any number passed as parameter.

So, calling multiplication_table(2) will return:

2
4
6
8
10
12
14
16
18
20

----------------------------------------------------------

The function should loop around numbers 1 - 10 (undefined but assumed)
and through each loop, multiply the base number by the interation and return 
the result. 

for i = 1 to 10
    multiply base number by i
    return the result. 

*/

function multiplication_table(baseNumber){
    for(var i=1;i<=10;i++){
        console.log(baseNumber * i);
    }
    return
}

multiplication_table(2)
multiplication_table(4)


