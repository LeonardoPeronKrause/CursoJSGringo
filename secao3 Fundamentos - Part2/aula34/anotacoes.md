    FUNÇÃO DE DECLARAÇÃO X FUNÇÃO DE EXPRESSÃO

    Declaração de Função:

Sintaxe: Usam a palavra-chave function seguida pelo nome da função e seus parâmetros.
Hoisting: São içadas (hoisted) para o topo do escopo em que foram definidas, o que significa que podem ser chamadas antes de serem declaradas no código.

Exemplo:
    function minhaFuncao(parametro) {
        // Corpo da função
    }


    Expressão de Função:

Sintaxe: São definidas como qualquer outra expressão e podem ser atribuídas a variáveis ou passadas como argumentos para outras funções.
Não são içadas (hoisted), então só podem ser chamadas depois de serem definidas no código.
Exemplo:

    const minhaFuncao = function(parametro) {
        // Corpo da função
    };


Em resumo, funções de declaração e funções de expressão têm diferenças na forma como são definidas e tratadas pelo interpretador JavaScript, especialmente em relação ao hoisting e à ordem de execução no código. Ambos os tipos de funções são amplamente utilizados em JavaScript e têm seus usos específicos dependendo das necessidades do desenvolvedor.