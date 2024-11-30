const age = '18';

if (age === 18) console.log('Você se tornou um adulto (strict)');

if (age == 18) console.log('Você apenas se tornou um adulto (loose)');

const favorite = Number(prompt('Whats your favorite number? '));
console.log(favorite);
console.log(typeof favorite);

if (favorite === 23) { // 23 === 23
    console.log('Cool! 23 is an amazing number!');
} else if (favorite === 7) {
    console.log('7 is also a cool number!');
} else if (favorite === 7) {
    console.log('9 is also a cool number!');
} else {
    console.log('Number is not a 23 or 7 or 9!');
}

if (favorite !== 23) console.log('Why not 23?');