// Exercise 5

// Q1.) Create an array of numbers and take input from user to add numbers to the array

// Ans:
let arr = [1,2,3,4,5];
let ip = prompt("Enter number to be added");
ip = Number.parseInt(ip);
let arr1 = arr.map((value)=>{
    return value+ip;
})

console.log(arr1);

// Q2.) Filter numbers divisible by 10 from an array

// Ans:
let arr0 = [1,5,7,10,12,15,17,20,23,25];
let div_by_10 = arr0.filter((value)=>{
    return (value%10==0);
})

console.log(div_by_10)

// Q3.) Implement factorial of n using array

// Ans:
let n=5;
let arr00 = [1,2,3,4,n];
let factorial = arr00.reduce((a,b)=>{
    return a*b;
})

console.log(factorial);



