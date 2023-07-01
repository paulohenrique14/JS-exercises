/*um array de objetos
esses objs serão nomes, se a pessoa é adm ou nao e se sou eu
somente meu nome terá o atributo "its me"
os adms devem ficar no topo, e eu em primeiro independente se eu for
adm ou nao*/

let persons = [{
    itsMe: true,
    admin: false,
    name:"Paulo"
},
{
    itsMe: false,
    admin: true,
    name:"José"
},
{
    itsMe: false,
    admin: true,
    name:"Maria"
},
{
    itsMe: false,
    admin: false,
    name:"Carlos"
},
{
    itsMe: false,
    admin: false,
    name:"Kiara"
}]


const organizer = (personsList) =>{
   
    personsList.sort((a, b) =>{
        if(a.admin === true && b.admin === false){
            return -1
        }
    })

    console.log(personsList)

    personsList.sort((a, b) =>{
        if(a.itsMe === true && b.itsMe === false){
            return -1;
        }
    });

    console.log(personsList);

   

    
}


console.log(organizer(persons))













/*

let adjustArr = () => {
    if(membros.admin ===true){
        membros.admin.unshift
    }
}

console.log(adjustArr())
console.log(membros)




let admins = membros.splice(1, 2)
console.log(admins)
let me = membros.shift();
console.log(me)

let group = [me, admins, membros];
console.log(group)

*/