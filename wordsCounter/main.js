const letterCounter = (str, wrd) => {
    let strArr = str.split(" ")
    let contagem = 0;

    for(let i = 0; i<strArr.length; i++){
        if(strArr[i] === wrd ){
           contagem = contagem +1
           
            
        }
    
    }
    console.log(contagem)
}

