// Strings

// strings can be enclosed in " " or ' '
let name = "Doggo";
let name2 = "McChoggo";
console.log(name.length);

// accessing individual characters of a string
console.log(name[0]);
console.log(name[1]);

// template literals
let boy1 = "Ram";
let boy2 = "Shyam";

let sentence  = `${boy1} is a friend of ${boy2}`;
console.log(sentence);

// Escape Sequence characters
let fruit = "Gum Gum o No \'mi ";
console.log(fruit);

// \t -> tab    \n-> newline  \r-> Carriage return

// inbuilt string function

// 1.) toUpperCase: converts string to uppercase
console.log(name.toUpperCase());

// 2.) toLowerCase: converts string to lowercase
console.log(name.toLowerCase());

// 3.) slice: prints only characters from start index to one less than end index

console.log(name.slice(2,4));
console.log(name.slice(2));

// 4.) replace: replaces characters in string

console.log(name.replace("Dog","Rog"));

// 5.) concat: joins another string

console.log(name.concat(" The legend ",name2,"."))

// 6.) trim: removes extra spaces preceding and succeeding first and last character

let name3 ="      GigaChad    ";
console.log(name3.trim());
