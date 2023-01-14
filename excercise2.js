// Exercise 2

// Q1.) Use conditional statement to determine if a person age lies between 10 & 20
// Ans:
// paste this code in browser->inspect->console to use prompt
let age = prompt("What is your age ?"); 
if(age<10 && age>20)
{
    conosle.log("No");
}
else
{
    console.log("Yes");
}

// Q2.) Demonstrate switch case

// Ans:
// Use below code in browser to utilise getDay()
switch (new Date().getDay()) 
{
case 0:
 day = "Sunday";
 break;
case 1:
 day = "Monday";
 break;
case 2:
  day = "Tuesday";
 break;
case 3:
 day = "Wednesday";
 break;
case 4:
 day = "Thursday";
 break;
case 5:
 day = "Friday";
 break;
case 6:
 day = "Saturday";
}

// Q3.) Write a script to test wether number is divisible by 2 or 3

// Ans:
// Use in browser
let num = prompt("Enter a number");

if(num%2==0 || num%3==0)
{
 console.log("Yes", (num%3==0)?"Number is divisible by 3": "Number is divisible by 2");
}
else
{
 console.log("No");
}
