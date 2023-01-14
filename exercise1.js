// Q1.) Create a string and try to add a number to it
let a = "Doggo";
console.log(typeof a);
let b = 6;
console.log(typeof b);
console.log(a+b);
// Ans: concats both the variables

// Q2.) Use typeof to to determine the result datatype from previous question
console.log(typeof (a+b));
// Ans: datatype is string

// Q3.) Create a const object and can you change it later to hold a number
const item ={
    name: "Husky",
    id: "RA2011005010078",
}
// Ans: item = "LOL"; will throw error

// Q4.) Try to add a new key inside the previous object
item['section'] = "B";
console.log(item);
// Ans: { name: 'Husky', id: 'RA2011005010078', section: 'B' }

// Q5.) Create a dictionary of 3 words
const dictionary = {
         facsimile: "an exact copy, especially of written or printed material.",
         jugaad: "a flexible approach to problem-solving that uses limited resources in an innovative way.",
         doggo: "an affectionate term for a dog."
}

console.log(dictionary.jugaad)