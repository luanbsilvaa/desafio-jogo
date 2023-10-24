class Jogo {
    constructor(nome, idade, tipo) {
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
    }
    atacar() {
        let ataque;
        if (this.tipo === "Mago") {
            ataque = "Magia"
        }
        else if (this.tipo === "Guerreiro") {
            ataque = "Espada"
        }
        else if (this.tipo === "Monge") {
            ataque = "Artes marciais"
        }
        else {
            ataque = "Shuriken"
        }
        return `O ${this.tipo} atacou usando ${ataque}`
    }
}

let informacoes = new Jogo("Amazing", 18, "Mago")
let informacoes2 = new Jogo("Zeus", 18, "Guerreiro")
console.log(informacoes.atacar())
console.log(informacoes2.atacar())