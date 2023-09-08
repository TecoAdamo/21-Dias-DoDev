let nome = prompt("Insira seu nome: ")
let idade = prompt("Insira sua idade: ")

if (idade >= 18) {
    let CNH = prompt("Você possui carteira? s / n:")
    let carro = prompt("Você tem carro? s / n:")
    if (CNH == "s" && carro == "n") {
        console.log("Você pode dirigir, mas não tens carro!")
    } else if (CNH && carro == "n") {
        console.log("Você não pode dirigir!")
    } else if (CNH == "n" && carro == "s") {
        console.log("Você tem carro, mas não pode dirigir")
    } else if (CNH && carro == "s") {
        console.log("Você será o motorista!")
    }
} else {
    console.log("Você não pode dirigir, pois você é menor de idade!")
}