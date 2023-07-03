const getCountWords = (str) =>{

    const strArr = str.trim().split(" ");

    //agora temos um array de palavras 




    //objeto vazio

    const obj = {}; 

    /*esse loop vai correr por toda array de palavras
    cada elemento da array é uma palavra
    pra cada palavra(elemento)dentro da array, a variavel word será criada
    na primeira interação word vai ser a primeira palavra
    na segunda interação ele vai ser a segunda palavra e assim por diante
    */
 
    for(let word of strArr){
        const firstLetter = word[0];

        //quando o elemtno é uma palavra, o [0] será uma letra

        if(obj[firstLetter]){
            obj[firstLetter]++
        }else{
            obj[firstLetter] = 1
        }
    }

    return obj;

}

console.log(getCountWords("O papa é brasileiro, bruno"))