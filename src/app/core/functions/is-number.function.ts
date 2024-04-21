export function isNumber(atributo: any) {
    return atributo !== undefined && typeof atributo === 'number' ? atributo : NaN
}

/*

A função chamada `isNumber` verifica se o atributo fornecido é um número. Aqui está o funcionamento detalhado:

1. A função recebe um parâmetro chamado `atributo`.
2. Ela verifica duas condições:
    - Se o `atributo` não é indefinido (`undefined`).
    - Se o tipo do `atributo` é `number` (ou seja, se é um número).
3. Se ambas as condições forem verdadeiras, a função retorna o próprio `atributo` (ou seja, o número).
4. Caso contrário, ela retorna `NaN` (Not-a-Number), indicando que o valor não é um número válido.

Essa função é útil para garantir que um valor seja tratado como um número, mesmo que ele seja fornecido como uma string ou outro tipo de dado. Por exemplo:

*/
