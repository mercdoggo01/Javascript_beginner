// Arrays

let marks = [91,81,65,57,false,"Not present"];
for(i in marks)
{
    console.log(marks[i]);
}
console.log(marks[6]); // will be undefined because 6th index doesn't exist
console.log("Length of array is ", marks.length);
marks[4] = 66; // updating value
marks[6] = 99; // adding new value to array
console.log(marks);

console.log(typeof marks); // array is an object

// array methods

// 1.) toString 
let test_arr0 = [1,2,3,"Doggo"];
let test_str0 = test_arr0.toString();
console.log(test_str0);

// 2.) join: connects all array elements with a connector
test_str1 = test_arr0.join("-");
console.log(test_str1);
// after join method array gets converted to string
console.log(typeof test_str1)

// 3.) pop: removes one element form last
test_arr0.pop();
console.log(test_arr0);

// 4.) push: adds one element from last
test_arr0.push("Doggo");
console.log(test_arr0);

// 5.) unshift: add element at the beginning
test_arr0.unshift(78);
console.log(test_arr0);

// 6.) shift: remove one element from beginning
test_arr0.shift();
console.log(test_arr0);

// ## Delete operator: deletes array element  but does not decrease size
delete test_arr0[0];
console.log(test_arr0); // will show one empty item at position 0
console.log(test_arr0.length);

// 7.) concat: joins two arrays

test_arr1=[4,5,6,"McChoggo"];
let joint_arr = test_arr0.concat(test_arr1);
console.log(joint_arr);

// 8.) sort : sorts array
test_arr2 = [29,90,65,45,1,3,7];
test_arr2.sort();
console.log(test_arr2);

// 9.) splice: removes elements from given index and deletes specified number of elements and replaces them with given elements
test_arr3 = [1,2,3,4,5,6,7,8];
test_arr3.splice(2,4,1000,1001,1002); // starts deleting and replacing from index 2  upto 4 places
console.log(test_arr3);
