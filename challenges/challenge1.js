let massaMark = 78.4;
let alturaMark = 1.81;
let massaJohn = 65;
let alturaJohn = 1.95;

// imc = massa / (altura * altura) masssa em kg e altura em m

let imcMark = massaMark / (alturaMark * alturaMark);

let imcJohn = massaJohn / (alturaJohn * alturaJohn);

console.log(imcMark, imcJohn);

let imcMarkMaior = (imcMark > imcJohn);
console.log('O IMC do Mark é maior? ', imcMarkMaior);