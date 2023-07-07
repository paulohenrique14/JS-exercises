/*Escreva uma função que recebe um array A e um numero B como parametros
Faça a soma de todos os elementos do array com valor maior que B
retorne a soma
*/

//colocar em uma array diferente os elementos maiores e somar essa array diferente

let numbers = [1, 2, 3, 4, 5, 6]
let number = [1]




let sum = (a, b) =>{
    let contagem = 0;

    
    for(let i = 0; i < a.length; i++){
        if(a[i] > b){
            contagem = contagem + a[i]     
        }
    }
    console.log(contagem)

}