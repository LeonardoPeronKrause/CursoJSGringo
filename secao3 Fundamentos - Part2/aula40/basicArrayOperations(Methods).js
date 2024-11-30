'use strict';

// ADD ELEMENTS
const friends = ['Michael', 'Steven', 'Peter'];
const newLenght = friends.push('Jay');
console.log(friends);
console.log(newLenght);

friends.unshift('John');
console.log(friends);

// REMOVE ELEMENTS
friends.pop(); // Last
const popped = friends.pop();
console.log(popped); 
console.log(friends);

friends.shift(); // First
console.log(friends);

// Para ver em que posição esta determinado elemento do Array
console.log(friends.indexOf('Steven'));
console.log(friends.indexOf('Bob'));

friends.push(23);
console.log(friends.includes('Steven'));
console.log(friends.includes('Bob'));
console.log(friends.includes(23));

if (friends.includes('Steven')) {
    console.log('You have a friend called Steven.')
} else {
     console.log('You dont have a friends called Steven.')
}