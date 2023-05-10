/*Fazer um programa que utilize HashingLinear para manipular chaves (representadas como um caractere) e possua as funções para inserir e buscar chaves nesta tabela hash. */


let alfab = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
    'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
    't', 'u', 'v', 'x', 'w', 'y', 'z']

let nome = 'rafael'
let vet = []

// Função de busca
function buscar(valor) {
    let pos = alfab.indexOf(valor)
    let hash = (pos + 1) % nome.length

    while (vet[hash] != null) {
        if (vet[hash] === valor) {
            return hash
        }
        hash = (hash + 1) % nome.length
        return null
    }

}

// Função de inserção
function inserir(valor) {
    let pos = alfab.indexOf(valor)
    let hash = (pos + 1) % nome.length

    while (vet[hash] != null) {
        hash = (hash + 1) % nome.length
    }
    vet[hash] = valor
}

// Inserindo valores na tabela
for (let i = 0; i < nome.length; i++) {
    inserir(nome[i])
}

console.log(vet)
console.log(buscar('e')) // Retorna o índice onde 'a' está na tabela, ou null se não estiver presente