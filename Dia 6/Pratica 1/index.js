let array = []
let indices_encontrados = []
let contadotIndice = 0

for (let i = 0; i < 5; i++) {
    let num = parseInt(prompt("Insira o " + (i + 1) + " º número."))
    array[i] = num
}

let achar_numero = parseInt(prompt("Insira o número que deseja encotrar: "))
for (let i = 0; i < 5; i++) {
    if (array[i] === achar_numero) {
        indices_encontrados[contadotIndice] = i
        contadotIndice++
    }
}

console.log("Seu número " + achar_numero + " está no indice: " + indices_encontrados)

// let array = []
// let indices_encontrados;

// for (let i = 0; i < 5; i++) {
//     let num = parseInt(prompt("Insira o " + (i + 1) + " º número."))
//     array[i] = num
// }

// let achar_numero = parseInt(prompt("Insira o número que deseja encotrar: "))
// for (let j = 0; j < array[j]; j++) {
//     indices_encontrados = array[j]
//     if (array[j] === achar_numero) {
//         console.log("Seu número está no indice: " + indices_encontrados[j])
//     }
// }