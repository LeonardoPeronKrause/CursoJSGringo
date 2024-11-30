'use strict';

function calcTip(conta) {
    if (conta >= 50 && conta <= 300) {
        return conta * 0.15;
    } else {
        return conta * 0.2;
    }
}

// OU USANDO O OPERADOR TERNÁRIO:
//function calcTip(conta) {
//    return conta >= 50 && conta < 300 ? conta * 0.15 : conta * 0.2;
//}

const conta = 1000;     
const tip = calcTip(conta);

const contas = [125, 555, 44];
const tips = [calcTip(contas[0]), calcTip(contas[1]), calcTip(contas[2])];
const totais = [contas[0] + tips[0], contas[1] + tips[1], contas[2] + tips[2]];


// OUTRO JEITO DE FAZER ->
//const contas = [125, 555, 44];
//const tips = [];
//const totais = [];
//contas.forEach(function(contas) {
//    const tip = calcTip(contas);
//    tips.push(tip);
//    totais.push(conta + tip);
//});

console.log('Contas: ' + contas);
console.log('Gorjetas: ' + tips);
console.log('Totais: ' +totais);