let nome = prompt("Insira seu nome: ")
let CPF = Number(prompt("Insira seu CPF: "))

let saldo_total = 1300
let opção;

let deseja_continuar = "s"

do {
    opção = prompt("Deseja realizar um saque ou depósito? s- saque / d - depósito: ")
    switch (opção) {
        case "s":
            let sacar = Number(prompt("Quantos você deseja sacar? R$ "))
            if (sacar > saldo_total) {
                console.log("Não é possivel sacar um valor maior que o do seu saldo bancário. Seu saldo: R$ " + saldo_total)
            } else if (sacar <= saldo_total) {
                let saldo_atual = saldo_total - sacar
                console.log("Saque realizado no valor de R$ " + sacar + ". Seu saldo atual agora é de R$ " + saldo_atual) 
            }
            break;
        case "d":
            let depositar = Number(prompt("Quantos você deseja depositar? R$ "))
            console.log("Seu depósito foi feito com sucesso: ", depositar + saldo_total)
            break;
        default:
            break;
    }

    deseja_continuar = prompt("Deseja continuar? s / n:")

} while (deseja_continuar == "s");