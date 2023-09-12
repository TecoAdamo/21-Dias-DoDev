let array = []
let numeros;

for (let index = 0; index < 5; index++) {
    numeros = parseInt(prompt(`Insira o ${index + 1} º número: `))
    array[index] = numeros
}

console.log(`Seus números: ${array}`)
console.log(`Seus números: ${array.reverse()}`)