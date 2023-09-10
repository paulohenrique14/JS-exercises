import {contatos} from "./listaContatos.js"

let contato = {
    getTodosContatos: function() {
        return contatos
    },
    getContato: function(i){
        return contatos[i]
    },
    addContato: function(novoContato, destinoDom){
        const div = document.createElement("div");
        const pNome = document.createElement("p")
        pNome.innerHTML = novoContato.nome
        const pTelefone = document.createElement("p")
        pTelefone.innerHTML = novoContato.telefone
        const pEmail = document.createElement("p")
        pEmail.innerHTML = novoContato.email
        div.appendChild(pNome)
        div.appendChild(pTelefone)
        div.appendChild(pEmail)
        destinoDom.appendChild(div)

    }
}


export default contato
