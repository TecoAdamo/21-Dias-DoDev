let modelos = []
let anos = []
let valores = []



for (let i = 0; i < 3; i++) {
    let modelo = prompt(`Modelo do carro: `)
    let ano = parseInt(prompt(`Ano do carro: `))
    let valor = Number(prompt(`Valor do carro: `))
    modelos[i] = modelo
    anos[i] = ano
    valores[i] = valor

// Ordenar os preços de forma crescente: 

    for (let i = 0; i < valores.length - 1; i++) {
        for (let j = 0; j < valores.length - i - 1; j++) {
            if (valores[j] > valores[j + 1]) {

                let modeloMaiorValor = modelos[j]
                modelos[j] = modelos[j + 1]
                modelos[j + 1] = modeloMaiorValor

                let valor_maior = valores[j]
                valores[j] = valores[j + 1]
                valores[j + 1] = valor_maior
            }
        }
    }

// Exibir os carros ordenados pelo preço: 
    console.log("Carros ordenados por preço: ")
    for (let index = 0; index < modelos.length; index++) {
        console.log(`Modelo: ${modelos[i]} | Ano: ${anos[i]} | Valor: ${valores[i]}`)
    }
}