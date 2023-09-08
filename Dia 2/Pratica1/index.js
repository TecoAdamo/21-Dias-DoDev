let num1 = Number(prompt("Insira um número: "))
let num2 = Number(prompt("Insira outro número: "))
let operação = prompt("Escolha uma operação a ser feita: +, -, *, /")

switch (operação) {
    case "+":
        console.log("Sua conta deu: ", num1 + num2)
        break;
    case "-":
        console.log("Sua conta deu: ", num1 - num2)
        break;
    case "*":
        console.log("Sua conta deu: ", num1 * num2)
        break;
    case "/":
        console.log("Sua conta deu: ", num1 / num2)
        break;

    default:
        console.log("Escolha pelo menos uma opção!")
        break;
}