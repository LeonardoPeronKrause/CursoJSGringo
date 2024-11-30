'use strict';

const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    age: 2037 - 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven']
};

console.log(jonas);

console.log(jonas.lastName);
console.log(jonas['lastName']);

const nameKey = 'Name';
console.log(jonas['first' + nameKey]);
console.log(jonas['last' + nameKey]);

//const interestedIn = prompt('What do you want to know about Jonas? Choose between firstName, lastName, job, age or friends');
//console.log(jonas[interestedIn]);

//if (jonas[interestedIn]) {
//    console.log(jonas[interestedIn]);
//} else {
//    console.log('Pedido errado! What do you want to know about Jonas? Choose between firstName, lastName, job, age or friends');
//}

jonas.location = 'Portugal';
jonas['X'] = '@jonasschmedtmann';

console.log(jonas.firstName + ' has ' + jonas.friends.length + ' friends, and his best friend is called ' + jonas.friends[0]);
console.log(`${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`);