let name = (fullname, flag) =>{
    switch(flag){
        case "firstname":
            let arr1 = fullname;
            console.log(arr1.split(" ")[0])
            console.log(arr1.split(" ").length)
            break;

        case "lastname":
            let arr2 = fullname;
            let flag2 = arr2.split(" ");
            if(flag2.length ===3){
                console.log(flag2[2])
            }else if(flag2.length ===2){
                console.log(flag2[1])
            }else if(flag2.length===4){
                console.log(flag2[3])
            }else if(flag2.length===5){
                console.log(flag2[4])
            }
            else if(flag2.length===6){
                console.log(flag2[5])
            }
            break;

        default:
            console.log("Digite uma palavra e uma das opções")
    }
}

