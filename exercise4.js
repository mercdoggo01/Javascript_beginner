// Exercise 4

// Q1.) What will be the length of the following console.log("Shiba\'Inu".lenght)

// Ans: 9 (\' counts as 1 character)
console.log("Shiba\'Inu".length);

// Q2.) Use the includes function

// Ans: 
let sentence = "DoggoMcChoggo was ";
let word = "DoggoMcChoggo";
console.log(`It is said that ${sentence} ${sentence.includes(word) ? "the " : "not the "} greatest Shiba Inu.`)

// Q3.) Convert string obtained from previous Question to lowercase

// Ans:
let str = `It is said that ${sentence} ${sentence.includes(word) ? "the " : "not the "} greatest Shiba Inu.`;
console.log(str.toLowerCase());

// Q4.) Extract the amount from the string "Please give Rs.1000"

// Ans:
let str1 = "Please give Rs.1000";
let amount = str1.slice(15);
amount = Number.parseInt(amount)
console.log(amount)

// Q5.) Change the 4th character of given string "Were you able to do it ?"

//Ans: String is immutable question can't be solved
