// Exercise 3

// Q1.) Write a program to print marks of a student in object given             obj = { Harry: 98 Rohan: 70 Aakash: 7}
// Ans: 
let obj= {
    Harry: 98,
    Rohan: 70,
    Askash: 7
}

for(i in obj)
{
    console.log("Student name "+ i +" Marks " + obj[i]);
}

// Q2.) Do same as Q1.) using for in loop

// Ans:
 for(i in obj)
 {
     console.log("Student name "+ i +" Marks " + obj[i]);
 }

// Q3.) Write a function that says Try again until user enters correct value

// Ans:
// Try this in browser 
let password = prompt("Enter 3 digit code");
password = Number.parseInt(password);
while(password!=757)
{
   console.log("Try Again");
   password = prompt("Enter 3 digit code");
}

// Q4.) Write a function to find average of 5 numbers

// Ans:
average = (a,b,c,d,e)=>{
  return (a+b+c+d+e)/5;
}

let num = average(1,2,3,4,5);
console.log(num);
