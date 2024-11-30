// INGLÊS -> Codding Challenge #1

/* Given an array of forecast maximum temperatures, the thermometer displays a string with these temperatures.

Example: [17, 21, 23] will print "... 17C in 1 days... 21C in 2 days... 23 in 3 days..."

Create a function 'printForecast' which takes in an array 'arr' and logs a string like the above to the console.

Use the proble-solving framework: Undestand the problem and break it up into sub-problems!

TEST DATA 1: [17, 21, 23]
TEST DATA 2: [12, 5, -5, 0, 4]
*/

// PORTUGUÊS -> Desafio de codificação nº 1

/* Dado um conjunto de temperaturas máximas previstas, o termômetro exibe uma string com essas temperaturas.

Exemplo: [17, 21, 23] imprimirá "... 17C em 1 dia... 21C em 2 dias... 23 em 3 dias..."

Crie uma função 'printForecast' que receba um conjunto 'arr' e registre uma string como a acima no console.

Use a estrutura de resolução de problemas: Entenda o problema e divida-o em subproblemas!

DADOS DE TESTE 1: [17, 21, 23]
DADOS DE TESTE 2: [12, 5, -5, 0, 4]
*/

'use strict';

/*  Entendendo o Problema
Temos um array de temperaturas máximas previstas e precisamos gerar uma string formatada que descreva cada temperatura associada ao dia correspondente.

Exemplo:

Para o array [17, 21, 23], queremos gerar a string "... 17C em 1 dia... 21C em 2 dias... 23C em 3 dias...".

Passos para Resolver o Problema
Iterar sobre o array de temperaturas: Precisamos percorrer cada elemento do array para obter a temperatura e o dia correspondente.

Formatar a string para cada temperatura: Para cada temperatura, precisamos criar uma parte da string no formato "XXC em Y dia(s)".

Concatenar todas as partes da string: Juntar todas as partes formatadas em uma string final que será exibida.

Exibir a string no console: Mostrar a string resultante.

Subproblemas

Obter os dados de entrada: Receber o array de temperaturas como entrada da função.

Iterar sobre o array e obter o índice: Usar um laço para percorrer o array e obter tanto o valor da temperatura quanto o índice (que representa o dia).

Criar a string para cada temperatura: Formatar a string no formato adequado para cada temperatura e dia.

Concatenar as strings parciais: Construir a string final a partir das strings parciais.

Imprimir a string final: Exibir a string completa no console.
*/

const arr = [17, 21 , 23];
//const arr = [12, 5, -5, 0, 4];

const printForecast = function(arr) {
    let str = ''; // essa variavel começa vazia pq a cada iteração vai ser adicionado algo a ela;
    for (let i = 0; i < arr.length; i++) {
        str = str + `${arr[i]}C em ${i + 1} dias...`; // ou str += `...${arr[i]}C em ${i + 1} dia`;
    }
    console.log('...' + str);
};

printForecast(arr);