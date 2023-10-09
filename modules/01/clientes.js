class Cliente  {
    static clientes = [];
    constructor(){}

    static getClientes = () => {
        return this.clientes
    }

    static getCliente = (i) => {
        return this.clientes[i]
    }

    static addClientes = (novoCliente) => {
        this.clientes.push(novoCliente)

    }
}

export default Cliente