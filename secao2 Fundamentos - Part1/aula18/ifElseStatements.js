const age = 15;

if (age >= 18) {
    console.log('A pessoa pode começar a carteira');
} else {
    const yearsLeft = 18 - age;
    console.log(`Faltam ${yearsLeft} anos, para a pessoa poder fazer a carteira de motorista!`);
}

const birthYear = 1999;

let century;
if (birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}

console.log(`A pessoa nasceu no século ${century}`)