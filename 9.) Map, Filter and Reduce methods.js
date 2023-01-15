// Map, Filter and Reduce methods (Advanced array methods)

// In any of these methods original array does not get changed
let arr = [1,2,3];

// 1.) map: used to create a new array by performing some operation on its elements

// getting  a copy of array in a new array using map
let arr0 = arr.map((value)=>{
    return value;
})
console.log(arr0);

// modifying value and getting new array by using map
 let arr1 = arr.map((value)=>{
     return value+1;
 })
 
 console.log(arr1);
 
 // using map at full potential
 let arr2 = arr.map((value,index,arr)=>{
     console.log(value,index,arr);
     return value;
 })
 
 console.log(arr2);
 
// 2.) filter method

let arr00 = [45,62,72,90,80];
// create a new array with elements greater than 50
let arr11 = arr00.filter((value)=>
{
    return value>50;
})

console.log(arr11);


// 3.) reduce method

let arr000 = [1,2,3,4,5];

let arr111 = arr000.reduce((a,b)=>{
    return a+b;
})

// basically elements of array gets added to each other reducing size to one
// 1+2 => 3
// 3+3 => 6
// 6+4 => 10
// 10+5 => 15
console.log(arr111);
console.log("Length of reduced array is: ", arr111.length);



