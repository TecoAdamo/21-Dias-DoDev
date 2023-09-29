let nome;
let salario;
let aumento;


function PerguntarInformações() {
    nome = prompt("Informe seu nome: ")
    salario = Number(prompt("Insira seu salário: "))
    CalcularAumento(nome, salario)
}
function CalcularAumento(nome, salario) {
    if (salario <= 1500) {
        aumento = 0.20
    }else if (salario >= 1501 && salario <= 2000) {
        aumento = 0.15
    }else if (salario >= 2001 && salario <= 3000) {
        aumento = 0.10
    }else if (salario >= 3001) {
        aumento = 0.05
    }
    let novoSalario = salario + (salario * aumento)
    console.log(`${nome}, seu salário recebeu um aumento de ${aumento}% e agora você passa a receber ${novoSalario}.`)
    PerguntarNovamente()
}

function PerguntarNovamente() {
    let pergunta = prompt("Deseja continuar? s / n: ")
    if (pergunta == "s") {
        PerguntarInformações()
    }else{
        console.log("Programa encerrado.")
    }
}

PerguntarInformações()