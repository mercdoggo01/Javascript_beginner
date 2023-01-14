// Loops

// 1.) basic for loop
for(let i=0 ; i<=10 ; i++)
{
    console.log(i);
}

// 2.) for-in loop : used in js objects & arrays

let studs = {
    Tom : 60,
    John : 56,
    Mark : 33,
    Tim : 90,
    Will : 64
}

for(let a in studs)
{
    console.log("Marks of student named "+ a + " is " + studs[a]);
}

// 3.) for-of loop used in iterable data structures like arrays & strings

for(let a of "Doggo")
{
    console.log(a);
}

// 4.) While loop

let b = 0;
let n = 5;
while(b<n)
{
    console.log(b);
    b++;
}

// 5.) Do-While loop
  // executes atleast once because  do loop runs then checks for condition in while loop
b=0;
n=10
do
{
    console.log(b);
    b++;
}
while(b<n);
