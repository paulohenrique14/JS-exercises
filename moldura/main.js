const frame = (row, column) =>{

    let line= " ";
    let height = " ";

    if(row >0 && column >0){
        
        for(let i=0; i<row; i++){
            line =line+ " - ";
            
            
        }
        
        for(let x=0; x<column; x++){
            height =  height + "|" +line + " |" + "\n "        
        }

        console.log(height)
        
    
      
    }

    

}

frame(3,10);
