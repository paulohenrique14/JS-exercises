// // const handleApi = () => {
// //     setTimeout(() =>{
// //         console.log('foi')
// //     }, 3000)
// // }

// const handleApi = () =>{
//     return new Promise((res, rej) =>{
//         setTimeout(() =>{
//             console.log('deu certo');
//             res();
//         }, 3000)
//     })
// }

// async function handleTime () {
//     console.log('espere')
    
//     await handleApi();

//     console.log('finalizado')
// }

// handleTime();

function getUser(id) {
    return fetch(`https://reqres.in/api/users?id=${id}`)
    .then((data) =>{
        return data.json()
    }).catch((err) =>{
        console.log(`Aconteceu o seguinte erro: ${err}`)
    })
}

async function handleUser(id){
    const user = await getUser(id)

    console.log(`O nome do usuário é: ${user.data.first_name}`)
}


handleUser(1)