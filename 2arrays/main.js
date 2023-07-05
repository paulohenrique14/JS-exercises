let odd = [0, 1, 3, 5, 7, 9];
let even= [0, 2, 4, 6, 8]

let concat = (arr1, arr2) =>{
    let numbers =  arr1.concat(arr2).sort();
    let orderNumbers = [...new Set(numbers)]
    console.log(orderNumbers)

}

console.log(concat(odd, even))


//remover os duplicados
//usar sort pra ordem crescente