// Exercise 6

// Q1.) write a program using prompt function to take input of age as a value from user and use alert to tell if he can drive, use error fucntion if user enters 0 or negative value and ask user before quitting

// Use below code in browser
// Ans:
const legalAge = (a)=>{
    return a>=18 ?true:false;
 }
 
 let userQuit = true;
 
 while(userQuit)
 {
    let age = prompt("Enter your age: ");
    age = Number.parseInt(age);
   if(age>0)
   {
    if(legalAge(age))
    {
        alert("You are okay..")
    }
    else
    {
        alert("You are underage !")
    }
   }
   else
   {
       console.error("Please enter a valid age.")
   }
    userQuit = confirm("Do you want to quit ?");
 }
 
 // Q2.) Make an if else condition wherein user gets redirected to google on entering a certain value
 
 // Ans:
 const redirector =(n)=>{
     n>=6? console.log("Nothing") : location.href= "https://google.com"
 }
 
 let num = prompt("Enter a number")
 num = Number.parseInt(num)
 
 redirector(num);
 
 // Q3.) change background color using js
 
 // Ans:
 let color = prompt("Enter background color")
 document.body.style.background = color