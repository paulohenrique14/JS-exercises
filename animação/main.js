const carro        = document.querySelector("#carro");
const btn_esquerda = document.querySelector("#btn_esquerda");
const btn_parar    = document.querySelector("#btn_parar");
const btn_direita  = document.querySelector("#btn_direita");

const handleInit = () =>{
    carro.setAttribute("style", "position: relative; left: 0px; width:100px;");
    tamMax = window.innerWidth - parseInt(carro.style.left)
}

let anima = null;
let tamMax = null;

const handleMov = (dir) =>{
    if(dir > 0) {
        if (parseInt(carro.style.left) +parseInt(carro.style.width) < tamMax){
            carro.style.left = parseInt(carro.style.left) + (10 * dir) + "px"
            anima = setTimeout(handleMov, 20, dir)
        }else{
            clearTimeout(anima)
        }
    }else if(dir < 0) {
        if (parseInt(carro.style.left) > 0){
            carro.style.left = parseInt(carro.style.left) + (10 * dir) + "px"
            anima = setTimeout(handleMov, 20, dir)
        }else{
            clearTimeout(anima)
        }
    } 

    console.log(tamMax)
    
}

btn_parar.addEventListener("click", () =>{
    clearTimeout(anima) 
      
})

btn_esquerda.addEventListener("click", () =>{
    clearTimeout(anima)
    handleMov(-1) 
})

btn_direita.addEventListener("click", () =>{
    clearTimeout(anima)
    handleMov(1) 
       
})

window.addEventListener("onload", handleInit())
window.addEventListener("resize", () => {
    tamMax = window.innerWidth - parseInt(carro.style.left)
    console.log(tamMax)
})