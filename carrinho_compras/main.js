/*Carrinho de compras
 vou ter uma array com nome do  produto, quantidade comprada e valor de 1 unidade
 devo fazer o seguinte:
 
 
 -remover os valores que a quantidade comprada seja =0
 -transformar o valor de 1 unidade para o valor total
 -somar todos os preços totais 


*/

let carrinho = [
    {nome: "caneta", qtde: 10, preço:7.99},
    {nome: "lápis", qtde: 2, preço:2.99},
    {nome: "borracha", qtde: 1, preço:1.99},
    {nome: "caderno", qtde: 3, preço:49.99},
    {nome: "estojo", qtde: 1, preço:14.99},
    {nome: "carro", qtde: 0, preço:57.990},
    {nome: "mochila", qtde: 1, preço:179.99},
]

//tirar os que tem qtde = 0

let adjustCar = () =>{
    carrinho = carrinho.filter(carrinho=> carrinho.qtde>0);
    valorReal()

}

//multiplicar o valor da unidade pela quantiade de vzes que o item foi pego

let valorReal = () =>{
    
    for(let i = 0; i<carrinho.length; i++){
        let valorTotal = (carrinho[i].qtde)*(carrinho[i].preço);
        carrinho[i].preçoTotal = valorTotal
    }
  
}

/*chama a função de tirar os items 0 e tbm chama a função de multiplicar
qtde por preço*/

adjustCar()
valorReal()



let acumulador = 0

/*Nesse loop a variavel acumulador começa com 0, mas ela vai somando-se com
os preços totais dos carrinhos*/



for(let x = 0 ; x < carrinho.length ; x++){
    acumulador +=carrinho[x].preçoTotal
    

}



console.log(carrinho)
console.log(acumulador)

