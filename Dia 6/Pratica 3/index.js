let array = []
let pergunta = parseInt(prompt("Informe quantos números deseja inserir: "))
let numeros;

for (let i = 0; i < pergunta; i++) {
    numeros = parseInt(prompt(`Insira o ${i + 1} º número: `));
    array[i] = numeros
}

console.log(`Seus números: ${array}`)
console.log(`Seus números invertido: ${array.reverse()}`)