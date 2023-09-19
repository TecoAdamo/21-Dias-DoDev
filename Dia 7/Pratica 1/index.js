let alunos = []
let nomes = []
let notas = []
let continuar_cadastrar = "s"
let contador = 1


while (continuar_cadastrar == "s") {
    for (let i = 0; i < 5; i++) {
        let nome = prompt(`Insira o nome do ${i + 1} º aluno: `)
        let nota = parseInt(prompt(`Insira anota do aluno cadastrado: `))
        alunos[i] = nome
        notas[i] = nota

        console.log("Nome: " + alunos[i] + " - " + "Nota: " + notas[i])
    }
    continuar_cadastrar = prompt("Deseja continuar? s / n: ")

    if (continuar_cadastrar == "n") {
        break;
    }
}