// Arrays and Loops

let test_arr = [1,2,3,4,5];

// 1.) normal loop

for(let i=0 ; i<test_arr.length ; i++)
{
    console.log(test_arr[i]);
}

// 2.) forEach loop

test_arr.forEach((element)=>{
    console.log(element);
})

// 3.) Array.from: creates array from given object

let name= "Doggo";
let test_arr1 = Array.from(name);
console.log(test_arr1);

// 4.) for of loop

for(i of test_arr1)
{
    console.log(i);
}

// 5.) for in loop : stores in form of keys

for(i in test_arr1)
{
    console.log(test_arr1[i]);
}




