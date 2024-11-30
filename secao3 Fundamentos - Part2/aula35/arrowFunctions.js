'use strict';

// Arrow function
const calcAge = birthYear => 2037 - birthYear;
const age = calcAge(1991);
console.log(age);

const anosAntesAposentar = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const aposentadoria = 65 - age;
    //return aposentadoria;
    return `${firstName} se aposenta em ${aposentadoria} anos`;
}

console.log(anosAntesAposentar(1991, 'Eduardo'));
console.log(anosAntesAposentar(1973, 'Leonardo'));
