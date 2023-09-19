let nomes = []
let senhas = []
let opção;

function SolicitarOpção() {
    opção = prompt("Deseja cadastrar - c, logar - l, excluir - e: ")
    return opção;
}

function Cadastrar() {
    nomes.push(prompt("Cadastre seu usuário: "))
    senhas.push(prompt("Cadastre sua senha: "))
    console.log("User cadastrado")
}

function LogarUser(nome, senha) {
    let logar = nomes.indexOf(nome)
    if (nomes !== -1 && senhas[logar] === senha) {
        return true
    } else {
        return false
    }
}



let continuar = "s"

while (continuar == "s") {

    SolicitarOpção()

    switch (opção) {
        case 'c':
            Cadastrar()
            break;

        case 'l':
            let nome = prompt("Digite seu nome: ")
            let senha = prompt("Digite sua senha: ")
            let login = LogarUser(nome, senha)
            if (login) {
                console.log("Bem vindo", nome)
            } else {
                console.log("Usuário ou senha incorreto!")
            }
            break;
        case 'e':
            let nomeParaExcluir = prompt("Insira o nome que deseja excluir: ");
            let indice = nomes.indexOf(nomeParaExcluir);

            if (indice !== -1) {
                nomes.splice(indice, 1);
                console.log(`Nome '${nomeParaExcluir}' removido com sucesso!`);
            } else {
                console.log(`Nome '${nomeParaExcluir}' não encontrado na lista.`);
            }
            break;

        default:
            console.log("Insira uma das opções! ")
            break;
    }
    continuar = prompt("Deseja continuar? s / n : ")
    if (continuar == "n") {
        break
    }
}