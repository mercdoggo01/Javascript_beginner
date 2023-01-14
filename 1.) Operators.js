// operators in javascript
// 1.) Arithmetic operators
let a=20;
let b=5;
console.log("a+b = ", a+b); // addition
console.log("a-b = ", a-b); // subtraction
console.log("a*b = ", a*b); // multiplication
console.log("a/b = ", a/b); // division
console.log("a%b = ", a%b); //  modulus
console.log("a**b = ", a**b); // exponentiation
console.log("++a = ", ++a); // increment
console.log("--a = ", --a); //  decrement

// 2.) Assignment operators
let c = 5;
console.log(c);
console.log("c+=1 =",c+=1);
console.log("c-=1 =",c-=1);
console.log("c*=1 =",c*=1);
console.log("c/=1 =",c/=1);
console.log("c%=1 =",c%=2);
console.log("c**=1 =",c**=2);

// 3.) Comparison operators
let d=6;
let e=7;
console.log(d==e);
console.log(d!=e);
console.log(d<e);
console.log(d>e);
console.log(d<=e);
console.log(d>=e);

// == and === comparison
comp = 8;
comp1 = "8";
console.log("double equal to",comp==comp1);
console.log("triple equal to",comp===comp1);

// 4.) Logical opeators
let f = 6;
let g= 5;
console.log(f>g && g<f)
console.log(f==g || g>f)