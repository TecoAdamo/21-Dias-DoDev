let conferir_informações = "s"
let salário;

do {
    let nome = prompt("Informe seu nome: ")
    let idade = Number(prompt("Informe sua idade: "))
    salário = Number(prompt("Informe seu salário atual:"))

    conferir_informações = prompt(`Suas informações estão corretas: ${nome}, ${idade} e ${salário}: s / n: `)

    if (conferir_informações == "s") {
        break;
    }

} while (conferir_informações == "n");

let anoAtual = 2023
let proximosAnos= 2033

aumento_salarial_primeiroAno = salário * 1.05

for (let j = 1; j < 2; j++) {
    console.log("Previsão para o seu " + j + " º ano é de: " + aumento_salarial_primeiroAno)
}

aumento_salarial_AnosSeguintes = salário * 2.05

for (let i = anoAtual; i < proximosAnos; i++) {
    console.log((i + 1) + " - " + aumento_salarial_AnosSeguintes.toFixed(2))
}