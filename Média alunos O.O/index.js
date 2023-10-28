let notaProva      = document.querySelector("#notaProva");
let notaTrabalho1  = document.querySelector("#notaTrabalho1");
let notaTrabalho2  = document.querySelector("#notaTrabalho2");
let btn            = document.querySelector("#btn");
let resultadoTrab  = document.querySelector("#resultadoTrab");
let resultadoGeral = document.querySelector("#resultadoGeral");

class Notas{
    constructor(pnota, t1nota, t2nota){
        this.pnota = parseFloat(pnota); // Converta os valores para números
        this.t1nota = parseFloat(t1nota);
        this.t2nota = parseFloat(t2nota);
    }

    getMediaTrab = function(){
        this.mediat = ((this.t1nota + this.t2nota) / 2)
        resultadoTrab.textContent = `Sua média nos trabalhos é de ${this.mediat.toFixed(2)}`;
        
    }

    getMediaGeral = function () {
        this.mediag = ((this.pnota + this.mediat) / 2)
        resultadoGeral.textContent = `Sua média geral é de ${this.mediag.toFixed(2)}`;

        if (this.mediag < 6){
            resultadoGeral.textContent = resultadoGeral.textContent + ". Infelizmente você reprovou"
        }else {
            resultadoGeral.textContent = resultadoGeral.textContent + ". Você está aprovado. Parabéns!"
        }

    }

}

btn.addEventListener("click", () =>{
    let aluno = new Notas(notaProva.value, notaTrabalho1.value, notaTrabalho2.value)
    aluno.getMediaTrab();
    aluno.getMediaGeral();
    notaProva.value     = '';
    notaTrabalho1.value = ''; 
    notaTrabalho2.value = '';
})

