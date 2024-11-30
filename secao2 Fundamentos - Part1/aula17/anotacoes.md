Em JavaScript, a crase (``) é usada para delimitar templates de strings quando se deseja incluir expressões ou variáveis dentro de uma string. Isso é chamado de "template literals". No exemplo que você deu:

const jonasNew = `I'm ${firstName}`;
console.log(jonasNew);

A crase (`) permite que você insira a variável `firstName` diretamente na string usando${}, o que é uma maneira mais concisa e legível do que concatenar várias strings com `+`.

Então, quando o código é executado, jonasNew terá o valor "I'm " seguido pelo valor da variável firstName.