        MODO RESTRITO (STRICT MODE)

O "modo restrito" (strict mode) em JavaScript é um recurso que permite escrever um código mais seguro, reduzindo certos comportamentos considerados confusos ou inseguros. Aqui está um resumo das características do modo restrito:

1. Erro mais estrito: O modo restrito torna os erros mais comuns em erros de lançamento. Por exemplo, atribuir valores a variáveis ​​não declaradas causa um erro em vez de criar uma nova variável global.
2. Eliminação de "silenciosidades": Alguns comportamentos considerados confusos ou não recomendados são eliminados. Por exemplo, você não pode deletar variáveis, funções ou argumentos de funções.
3. Melhoramento da segurança: Algumas práticas inseguras são desativadas. Por exemplo, você não pode usar palavras-chave reservadas (como eval e arguments) como nomes de variáveis ou parâmetros de função.
4. Melhorando a otimização: O modo restrito permite que os motores JavaScript otimizem o código com mais eficiência. Isso pode resultar em um melhor desempenho do código em alguns casos.

Para ativar o modo restrito, você pode colocar a declaração "use strict"; no início de um arquivo JavaScript ou no início de uma função. Isso instrui o interpretador a executar o código no modo restrito.