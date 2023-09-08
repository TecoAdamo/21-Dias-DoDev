let fome = prompt("Você está com fome? s / n:")
let dinheiro = prompt("Você tá com dinheiro? s / n:")
let restaurante = prompt("O restaurante está aberto? s / n:")

if (fome == "s" && dinheiro == "n") {
    console.log("Hoje a janta será em casa!")
} else if (fome && dinheiro == "s" && restaurante == "n") {
    console.log("Vamos pedir um delivery!")
} else if (fome && dinheiro && restaurante == "s") {
    console.log("Vamos jantar fora hoje!")
} else {
    console.log("Insira pelo menos uma opção!")
}