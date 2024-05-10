const bill = 275;

const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20;

//console.log(`O valor da tip é ${tip}`);

console.log(`O seu pedido foi no valor ${bill}, a gorjeta em cima desse valor foi de ${tip}, então o total da conta sairá no valor de ${bill + tip}`);
