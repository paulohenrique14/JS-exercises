class Carro{   //classe pai
    constructor(tipo, portas){
        this.tipo   = tipo
        this.portas = portas
        this.ligado = false
        this.vel    = 0
        this.cor    = undefined
    }
    ligar = function(){
        this.ligado = true
    }
    desligar = function(){
        this.ligado = false
    }
    setCor = function(cor){
        this.cor = cor
    }
}

class Militar extends Carro{
    constructor(nome, portas, blindagem, municao){
        super(nome, portas)
        this.blindagem = blindagem
        this.municao = municao
        this.setCor("Verde")
    }

    atirar = function(){
        if(this.municao > 0){
            this.municao --
        }
    }

}

class Utilitario extends Carro{
    constructor(nome, portas, cavalos){
        super(nome, portas)
        this.cavalos = cavalos
        this.vel = 220
    }
}

const c1 = new Carro("Normal", 4)
const c2 = new Militar("Caminhonete Militar", 1, 100, 50)
const c3 = new Utilitario("Azure", 2, 135)
c2.setCor("Azul")

c1.ligar();
c1.setCor("Preto")

console.log(`Nome: ${c1.tipo}`)
console.log(`Quantidade de portas: ${c1.portas}`)
console.log(`Ligado?: ${(c1.ligado ? "Sim" : "Não")}`)
console.log(`Velocidade: ${c1.vel}`)
console.log(`Cor: ${c1.cor}`)

console.log("======================================")

console.log(`Nome: ${c2.tipo}`)
console.log(`Quantidade de portas: ${c2.portas}`)
console.log(`Ligado?: ${(c2.ligado ? "Sim" : "Não")}`)
console.log(`Velocidade: ${c2.vel}`)
console.log(`Cor: ${c2.cor}`)
console.log(`Blindagem: ${c2.blindagem}`)
console.log(`Municao: ${c2.municao}`)

console.log("======================================")
c3.ligar();
c3.setCor("Vermelho Rubi")


console.log(`Nome: ${c3.tipo}`)
console.log(`Quantidade de portas: ${c3.portas}`)
console.log(`Ligado?: ${(c3.ligado ? "Sim" : "Não")}`)
console.log(`Velocidade: ${c3.vel}`)
console.log(`Cor: ${c3.cor}`)
console.log(`Cavalos: ${c3.cavalos}`)



