//DOM manipulation

// 1.) GetElementById()

const title = document.getElementById('main-heading');

console.log(title);
// output: <h1 id="main-heading"> Favourite tanks </h1>

// 2.) GetElementByClassName()

const listItems = document.getElementsByClassName('list-items');

console.log(listItems);
// returns array of list items
// output: HTMLCollection(5) [li.list-items, li.list-items, li.list-items, li.list-items, li.list-items]

// 3.) GetElementByTagName()

const listItems1 = document.getElementsByTagName('li');

console.log(listItems1);
// same output as above

// 4.) querySelector  and  querySelectorAll()

// querySelector returns nodelist of given attribute while querySelectorAll gives all occurences of the attribute

const container =  document.querySelector('div');

console.log(container);
// output: NodeList [div.container]