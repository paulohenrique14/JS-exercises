const Pessoa = {
    nome :"",
    idade:"",
    getNome:function(){
        return this.nome
    },
    getIdade:function(){
        return this.idade
    },
    setNome:function(nome){
        this.nome = nome
    },
    setIdade:function(idade){
        this.idade = idade
    },
}

let users = [];

const nomeInput = document.querySelector(".name")
const idadeInput = document.querySelector(".age")
const btnInput = document.querySelector(".send")
const show = document.querySelector(".resultado")

btnInput.addEventListener("click", () =>{
    Pessoa.setNome(nomeInput.value)
    Pessoa.setIdade(idadeInput.value)
    let user = {
        name: Pessoa.getNome(),
        idade: Pessoa.getIdade() 
    }
    users.push(user);
    console.log(users)
    nomeInput.value = "";
    idadeInput.value = "";
    nomeInput.focus();
})
