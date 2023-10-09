import Cliente from './clientes.js'

let btn      = document.querySelector(".btn")
let name     = document.querySelector("#name")
let age      = document.querySelector("#age")
let postname = document.querySelector("#postname")
let data     = document.querySelector(".clientes")


btn.addEventListener("click", () =>{
    Cliente.addClientes(
        {
            nome      : name.value,
            sobrenome : postname.value,
            idade     : age.value
        }
    ) 

    let div       = document.createElement("div");
    var nome      = document.createElement("p");
    var sobrenome = document.createElement("p");
    var idade     = document.createElement("p");
    div.classList.add("clients")

    nome.innerText      = "Nome: " + name.value;
    sobrenome.innerText = "Sobrenome: " + postname.value;
    idade.innerText     = "Idade: " + age.value;

    div.appendChild(nome)
    div.appendChild(sobrenome)
    div.appendChild(idade)

    data.appendChild(div)

    name.value = ''
    postname.value = ''
    age.value = ''
    name.focus()
})

