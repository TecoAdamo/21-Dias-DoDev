let deseja_cadastrar_novos_dados = "s"

while (deseja_cadastrar_novos_dados == "s") {
    let nome = prompt("Insira seu nome: ")
    let idade = Number(prompt("Insira sua idade: "))
    let peso = Number(prompt("Informe seu peso: "))
    let altura = parseFloat(prompt("Informe sua altura: "))
    let profissão = prompt("Qual sua área de atuação: ")

    console.log(`Eae ${nome}, você tens ${idade} anos. Pesa ${peso} kg e tens ${altura} de altura. E hoje atua na área de ${profissão}.`)

    if (idade >= 18) {
        console.log("Tá liberado a brejinha")
    } else {
        console.log("Breja pra você? Nem pensar !")
    }

    let IdadeDias = idade * 365
    let IdadeSemana = idade * 7
    let IdadeMeses = idade * 30

    console.log(`Sua idade em dias ${IdadeDias}, em semanas ${IdadeSemana} e em meses ${IdadeMeses}`)

    let IMC = peso / (altura * altura)

    console.log("Seu IMC é: " + IMC.toFixed(2))

    let ano_de_nascimento = 2023 - idade

    console.log("Ano de nascimento: " + ano_de_nascimento)

    let contador = 0

    for (let index = ano_de_nascimento; index <= 2023; index++) {
        console.log(index + " - " + contador++ + " anos de idade.")
    }

    deseja_cadastrar_novos_dados = prompt("Deseja cadastrar dados novos? s / n:")

    if (deseja_cadastrar_novos_dados == "n") {
        break;
    }
}