let choice = (text, flag) =>{
    switch(flag){
        case "start":
            if(text.length>3){
                console.log(text.substr(0, 3))
            }else{
                console.log(text)
            }
            break;
        case "end":
            if(text.length>3){
                console.log(text.substr(text.length-3, text.length))
            }else{
                console.log(text)
            }
            break;
        default:
            console.log("Digite uma palavra e uma das opções")
    }
}