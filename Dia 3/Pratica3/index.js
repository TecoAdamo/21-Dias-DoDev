let tabuada = Number(prompt("Insira um número para ter a tabuada: "))

for (let i = tabuada; i <= tabuada + 2; i++) {
    console.log("Tabuada do número: ", i)
    for (let j = 1; j < 10; j++) {
        console.log(i, " x ", j, " = ", i * j)
    }
}