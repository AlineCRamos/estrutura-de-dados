/*Fazer uma função que verifique se uma dada expressão aritmética possui ou não parênteses, colchetes e chaves corretamente utilizados, tanto número quanto posição. */
let pilha = []
let simbolos = "{}[]"


function verificaExpressao(expressao) {

    for (let i = 0; i < expressao.length; i++) {
        let caractere = simbolos[i]

        if (caractere === '(' || caractere === '[' || caractere === '{') {
            pilha.push(caractere)
        }
        else if (caractere === ')' || caractere === ']' || caractere === '}') {
            let ultimo = pilha.pop()

            if ((caractere === ')' && ultimo !== '(') || (caractere === ']' && ultimo !== '[') ||
                (caractere === '}' && ultimo !== '{')) {
                return false
            }
        }
    }

    return pilha.length === 0;
}


console.log(verificaExpressao(simbolos)) 