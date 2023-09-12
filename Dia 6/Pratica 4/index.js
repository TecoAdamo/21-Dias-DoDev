let numero = parseInt(prompt("Insira um número: "))
let Fibonacci = []
Fibonacci[0] = numero - 1
Fibonacci[1] = numero

for (let i = 2; i < 10; i++) {
Fibonacci[i] = Fibonacci[i - 1] + Fibonacci[i - 2]
}

console.log("Fibonacci: " + Fibonacci)