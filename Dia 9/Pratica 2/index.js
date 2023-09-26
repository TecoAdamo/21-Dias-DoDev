class Carro {
    constructor(nome, potencia, velocidadeMaxima, aceleração) {
        this.nome = nome;
        this.potencia = potencia;
        this.velocidadeMaxima = velocidadeMaxima;
        this.aceleração = aceleração;
    }

    CalcularDistancia(distancia) {
        let resultado = distancia / (this.velocidadeMaxima / this.aceleração);
        return resultado;
    }
}

class Corrida {
    constructor(Nome, Tipo, Distancia) {
        this.Nome = Nome;
        this.Tipo = Tipo;
        this.Distancia = Distancia;
        this.Participantes = [];
        this.Vencedor = '';
    }

    DefinirVencedor() {
        let menorTempo = this.Participantes[0].CalcularDistancia(this.Distancia);
        let vencedor = this.Participantes[0];

        for (let index = 1; index < this.Participantes.length; index++) {
            let tempo = this.Participantes[index].CalcularDistancia(this.Distancia);
            if (tempo < menorTempo) {
                menorTempo = tempo;
                vencedor = this.Participantes[index];
            }
        }

        this.Vencedor = vencedor;
    }

    ExibirVencedor() {
        alert("O vencedor é: " + this.Vencedor.nome);
    }
}

 
const carro1 = new Carro("Audi", 200, 250, 10);
const carro2 = new Carro("Mercedes", 180, 220, 8);
const carro3 = new Carro("BMW", 220, 260, 9);

 
const corrida = new Corrida("Corrida Exp", "Tipo A", 1000);

corrida.Participantes.push(carro1, carro2, carro3); 
corrida.DefinirVencedor()
corrida.ExibirVencedor()