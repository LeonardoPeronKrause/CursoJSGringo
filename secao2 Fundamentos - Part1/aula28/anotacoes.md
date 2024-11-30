    OPERADORES TERNÁRIOS

    Sintaxe: O operador ternário tem a seguinte sintaxe:
        condição ? expressão1 : expressão2
    -> Ele avalia a condição. Se a condição for verdadeira, expressão1 é executada. Se a condição for falsa, expressão2 é executada.


    Exemplo: Por exemplo, considere a seguinte instrução if...else:
        if (idade >= 18) {
            status = 'Adulto';
        } else {
            status = 'Jovem';
        }
    Isso pode ser expresso de forma mais concisa usando o operador ternário:
    var status = idade >= 18 ? 'Adulto' : 'Jovem';
    
    Clareza: Os operadores ternários podem tornar o código mais conciso e legível em situações simples de if...else. No entanto, o uso excessivo ou em situações complexas pode tornar o código menos legível.

    Cuidados: É importante manter a clareza ao usar operadores ternários. Eles são mais adequados para expressões simples e condições claras. Se a lógica se tornar muito complexa, pode ser melhor usar uma instrução if...else tradicional.