const massaMark = 58.4;
const alturaMark = 1.81;
const massaJohn = 99;
const alturaJohn = 1.95;

// imc = massa / (altura * altura) masssa em kg e altura em m

const imcMark = massaMark / (alturaMark * alturaMark);

const imcJohn = massaJohn / (alturaJohn * alturaJohn);

//console.log(imcMark, imcJohn);

 if (imcMark > imcJohn) {
    console.log(`O IMC do Mark (${imcMark}) é maior que o IMC do John (${imcJohn})!`);
 } else if (imcJohn > imcMark) {
    console.log(`O IMC do John (${imcJohn}) é mais alto que o IMC do Mark (${imcMark})!`);
 } else {
    console.log('Os IMC são iguais!');
 }