const getSmallestWord = (str) =>{
    const strArr = str.trim().split(" ");

    let smallestWord = strArr[0];

    for(let i = 1; i< strArr.length; i++){
        if(strArr[i].length < smallestWord.length){
            smallestWord = strArr[i];
        }
    }

    return smallestWord

}

console.log(getSmallestWord("mas e agora")) 