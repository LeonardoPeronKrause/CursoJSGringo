    DECLARAÇÕES X EXPRESSÕES


    Declarações (Statements):
As declarações são unidades de código que realizam ações. Elas não produzem valores por si mesmas.
Declarações geralmente incluem instruções como declarações de variáveis, loops (for, while, do-while), condicionais (if-else, switch), declarações de função, entre outras.
Declarações são usadas para controlar o fluxo de execução do programa e para definir estruturas e comportamentos.

let x = 5; // Declaração de variável

function soma(a, b) { // Declaração de função
    return a + b;
}



Expressões (Expressions):
As expressões, por outro lado, são unidades de código que produzem valores.
Elas podem ser tão simples quanto um valor literal (como 5, 'hello', true) ou tão complexas quanto uma expressão matemática ou uma chamada de função.
Expressões podem ser usadas em muitos contextos onde se espera um valor, como atribuições de variáveis, parâmetros de função, condições em instruções if, while, for, etc.

5 + 3 // Expressão que produz o valor 8

let y = 5 + 3; // Expressão sendo atribuída a uma variável

if (x > 0) { // Expressão sendo usada como condição
    // código aqui
}

Em resumo, a principal diferença entre declarações e expressões em JavaScript é que as declarações realizam ações, enquanto as expressões produzem valores. No entanto, há momentos em que as duas podem se sobrepor, como em declarações de função que também são expressões de função (por exemplo, funções de expressão).