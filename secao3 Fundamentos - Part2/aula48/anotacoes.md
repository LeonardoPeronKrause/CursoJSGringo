Nesta aula, estamos trabalhando com loops em JavaScript para manipulação e iteração de arrays. Vamos analisar cada parte do código:

Parte 1: Iteração Reversa de um Array

const jonas = [
    'Jonas',
    'Schmedtmann',
    2037 - 1991,
    'teacher',
    ['Michael', 'Peter', 'Steven'],
    true
];

for (let i = jonas.length - 1; i >= 0; i--) {
    console.log(i, jonas[i]);
}

Aqui, definimos um array chamado jonas que contém diferentes tipos de dados: strings, um número, um array e um booleano. O loop for iterado de forma reversa percorre o array jonas de seu último elemento até o primeiro, imprimindo o índice e o valor correspondente a cada iteração. Este é um exemplo de como podemos iterar sobre um array de trás para frente.

Parte 2: Loop Aninhado para Simular Exercícios

for (let exercise = 1; exercise < 4; exercise++) {
    console.log(`------ Starting exercise ${exercise}`);

    for (let rep = 1; rep < 6; rep++) {
        console.log(`Exercicio ${exercise}: Levantamento de peso repetição ${rep}`);
    }
}

Nesta parte, utilizamos loops aninhados para simular uma rotina de exercícios. O primeiro loop for itera sobre três exercícios diferentes (de 1 a 3). Para cada exercício, um segundo loop for aninhado itera sobre cinco repetições (de 1 a 5). Isso resulta na impressão de uma mensagem indicando o início de cada exercício, seguida por mensagens que detalham cada repetição de levantamento de peso para aquele exercício.

Resumo
Loop Reverso: O primeiro exemplo demonstra como iterar sobre um array de forma reversa, imprimindo tanto os índices quanto os valores.

Loops Aninhados: O segundo exemplo mostra a utilização de loops aninhados para simular uma série de exercícios, com múltiplas repetições para cada exercício.

Esta aula é útil para entender a manipulação de arrays com loops e a estruturação de loops aninhados para executar tarefas repetitivas.


