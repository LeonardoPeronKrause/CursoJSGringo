let rep = 1;
while (rep <= 10) {
    //console.log(`WHILE: Levantamento de peso repetição ${rep}`);
    rep++;
}

let dice = Math.trunc(Math.random() * 6) + 1;

while (dice !== 6) {
    console.log(`Você gerou ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1;
    if (dice === 6) console.log(`O numero ${dice} foi encontrado, o loop está prestes a acabar !`);
}