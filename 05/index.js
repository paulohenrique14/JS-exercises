const f_tipoMilitar   = document.querySelector("#f_tipoMilitar")
const f_tipoNormal    = document.querySelector("#f_tipoNormal")
const f_municao       = document.querySelector("#f_municao")
const f_blindagem     = document.querySelector("#f_blindagem")
const carros          = document.querySelector(".carros")
const btn_addCarro    = document.querySelector("#btn_addCarro")
const f_nome          = document.querySelector("#f_nome");
const f_portas        = document.querySelector("#f_portas")
const btn_removeCarro = document.querySelector(".delete")

let arrCarros = []

f_tipoMilitar.addEventListener("click", () =>{
    f_blindagem.removeAttribute("disabled")
    f_municao.removeAttribute("disabled")
    f_municao.value   = "";
    f_blindagem.value = "";
})

f_tipoNormal.addEventListener("click", () =>{
    f_blindagem.value = 0
    f_municao.value   = 0
    f_blindagem.setAttribute("disabled", "disabled")
    f_municao.setAttribute("disabled", "disabled")
})

const handleCars = () =>{
    carros.innerHTML = "";
    arrCarros.forEach((c) =>{
        const div = document.createElement("div");
        const btnDelete = document.createElement("button")
        btnDelete.setAttribute("class", "delete")
        btnDelete.innerText = "deletar"
        btnDelete.addEventListener("click",(evt) =>{
            console.log(evt.target.parentNode)
        })
        div.setAttribute("class", c.tipo)
        div.setAttribute("class", "carro")
        div.innerHTML = c.tipo
        carros.appendChild(div)
        div.appendChild(btnDelete)
    })
}

btn_addCarro.addEventListener("click", () =>{
    if (f_tipoMilitar.checked) {
        let militarCar = new Militar(f_nome.value, f_portas.value, f_municao.value, f_blindagem.value)
        arrCarros.push(militarCar)
    }
    else if (f_tipoNormal.checked) {
        let normalCar = new Carro(f_nome.value, f_portas.value)
        arrCarros.push(normalCar)
    }
    handleCars();   
    console.log(arrCarros)
    f_nome.value      = "";
    f_portas.value    = "";
    f_municao.value   = "";
    f_blindagem.value = "";
})

class Carro{   
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

