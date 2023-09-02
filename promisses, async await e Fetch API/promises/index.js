// const myPromise = new Promise((res, rej) => {
//     const nome = 'Matheus';

//     if(nome === 'Matheus') {
//         res('Usuario matheus encontrado!')

//     }else{
//         rej('nao foi encontrado o usuário')
//     }
// })


// myPromise.then((data) => {
//     return data.toUpperCase()
// })
// .then((strModificada) => {
//     console.log(strModificada)
// })
// .catch((err) => {
//     console.log('um erro foi encontrado: '+err)
// })

const p1 = new Promise((res, rej) => {
    res('p1 ok')
})

const p2 = new Promise((res, rej) => {
    res('p2 ok')
})

const p3 = new Promise((res, rej) => {
    res('p3 ok')
})

const resolveAll = Promise.all([p1, p2, p3]).then((data) => {
    console.log(data)
})

