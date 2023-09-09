let nota;
let sexo;
let qntdade_homens_enviaram_notas = 0
let maior_nota_homens = 0
let mulheres_acima_7 = 0
let total_de_alunos = nota
let somaNotas = 0

let cadastrar_nota = "s"
while (cadastrar_nota == "s") {
    nota = parseInt(prompt("Insira a nota do aluno: "))
    sexo = prompt("Informe o sexo do aluno: m - masculino / f - feminino")

    if (sexo == "m") {
        if (nota > maior_nota_homens) {
            maior_nota_homens = nota
        }
        qntdade_homens_enviaram_notas++
    }

    if (sexo == "f" && nota > 7) {
        nota += sexo
        mulheres_acima_7++
    }

    cadastrar_nota = prompt("Deseja cadastrar outra nota? s / n")
}

let media_geral = 0

media_geral += nota

console.log("A média geral é de: " + media_geral)
console.log("Quantidade de homens que enviaram as notas: " + qntdade_homens_enviaram_notas)
console.log("A maior nota entre os homens foi: " + maior_nota_homens)
console.log("Quantas mulheres tiraram nota maior que 7: " + mulheres_acima_7)