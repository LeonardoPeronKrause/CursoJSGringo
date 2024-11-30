Nesta aula, estamos trabalhando com o loop while em JavaScript para executar blocos de código de forma repetitiva, com base em condições especificadas. Vamos detalhar cada parte do código:

Parte 1: Loop while com Contador
let rep = 1;
while (rep <= 10) {
    //console.log(`WHILE: Levantamento de peso repetição ${rep}`);
    rep++;
}

Neste exemplo, usamos um loop while para iterar um bloco de código enquanto a condição rep <= 10 for verdadeira. Inicialmente, a variável rep é definida como 1. Em cada iteração do loop, rep é incrementada em 1. Embora a linha que imprime a mensagem esteja comentada, se estivesse ativa, imprimiria uma mensagem para cada repetição de levantamento de peso até que rep fosse maior que 10.

Parte 2: Loop while com Número Aleatório
let dice = Math.trunc(Math.random() * 6) + 1;

while (dice !== 6) {
    console.log(`Você gerou ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1;
    if (dice === 6) console.log(`O numero ${dice} foi encontrado, o loop está prestes a acabar !`);
}

Aqui, usamos um loop while para gerar um número aleatório entre 1 e 6 até que o número 6 seja gerado. A função Math.trunc(Math.random() * 6) + 1 gera um número inteiro aleatório entre 1 e 6. O loop continua executando enquanto o valor de dice não for igual a 6. Dentro do loop, imprimimos o valor gerado e, se o número gerado for 6, imprimimos uma mensagem indicando que o loop está prestes a acabar.

Resumo
Loop while com Contador: Utilizamos um loop while simples que itera um bloco de código baseado em uma condição de contador (rep <= 10), demonstrando uma estrutura de repetição controlada por um contador.
Loop while com Condição Aleatória: Utilizamos um loop while que depende de uma condição aleatória (dice !== 6), demonstrando uma estrutura de repetição que continua até que uma condição específica seja satisfeita, gerando números aleatórios e verificando se o número 6 foi gerado.
Esta aula é útil para entender o funcionamento e a aplicação de loops while para executar tarefas repetitivas baseadas em condições diferentes, seja um contador ou uma condição aleatória.