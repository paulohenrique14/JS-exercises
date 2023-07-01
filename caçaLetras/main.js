let getLetter = (letter, str) =>{
    
    let strArr = str.trim().split("")
    console.log(strArr)
    let count ="0";
    for(let i = 0; i<str.length; i++){
        if(strArr[i] == letter){
            count ++

        }else{
            
        }
    }

   console.log(count)
}

console.log(getLetter("n", "leonardo anda"))