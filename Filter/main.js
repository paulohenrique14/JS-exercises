let numbers = [1, 2, 3, 4, 5, 6, 7];

let fill = (arr, a) =>{
    for(let i = 0; i<arr.length; i++){
        
        if(arr[i]== a){
            arr.splice(i, 1)
        }
    }

    console.log(arr)
}

fill(numbers, 5)