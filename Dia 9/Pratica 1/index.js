class Setup {
    tipo
    processador
    armazenmento
    memoriaRam
    constructor(tipo, processador, armazenmento, memoriaRam) {
        this.tipo = tipo
        this.processador = processador
        this.armazenmento = armazenmento
        this.memoriaRam = memoriaRam
    }

    ExibirInfo() {
        console.log(`Meu Setup se baseia em um ${this.tipo}, com as seguintes configurações: Processador ${this.processador} - Armazenamento ${this.armazenmento} - Memória RAM ${this.memoriaRam}`)
    }

}

let tipo = prompt("Qual o seu setup? D - Desktop ou N - Notebook: ")
let processador = prompt("Qual o processador da sua maquina? ")
let armazenamento = prompt("Quantos de armazenamento tens o seu SSD?")
let memoriaRam = prompt("Quantos de MemóriaRam você possui? ")
let myNotebook = new Setup(tipo, processador, armazenamento, memoriaRam)
console.log(myNotebook.ExibirInfo())