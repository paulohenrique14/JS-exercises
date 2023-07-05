let numbers = [2, 4, 3, 5, 1];
let colors = ["white", "grey", "blue", "yellow", "black"];


let sequence = (arr, order) =>{
    

    switch(order) {
    case "asc":
        console.log(arr.sort());
        break;
    case "desc":
        console.log(arr.sort().reverse());
        break;
    default:
        console.log("Escolha 'Asc' ou 'Desc'.")
    
    }

}











































































