let opção = prompt("O que você deseja fazer? Colocar Gasolina - g / Álcool - a / Calibrar pneu - c: ")
switch (opção) {
    case "g":
        let LitrosGasolina = parseFloat(prompt("Quantos litros você deseja colocar: "))
        ValorGastoGasolina = LitrosGasolina * 5.87
        console.log("Custa R$", ValorGastoGasolina, " para abastecer seu carro!")
        break;
    case "a":
        let LitrosAlcool = parseFloat(prompt("Quantos litros de Álcool deseja colocar:"))
        ValorGastoAlcool = LitrosAlcool * 2.44
        console.log("Custa R$", ValorGastoAlcool, " para abastecer seu carro!")
        break;
    case "c":
        console.log("Pneus calibrados com sucesso!")
        break;
    default:
        break;
}