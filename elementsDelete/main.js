let colors =["Azul", "Vermelho", "Rosa", "Branco", "Verde", "Grená"];

const arrMod = (arr) =>{
    if(arr.length>3){
        for(let i = 0; i<3; i++){
            arr.shift();
        }
        console.log("excelente. Serão removidos os 3 primeiros elementos")
    }
    else{
        for(let i = 0; i<3; i++){
            arr.shift();
        }
        console.log("Coloque uma array com 3 ou mais elementos")
    }

    console.log(arr)

}

arrMod(colors)