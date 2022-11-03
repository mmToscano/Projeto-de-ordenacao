barras = document.querySelectorAll(".barrasVerdes");
let timeOut;
let contadorDeVezes = 0;

function gerarValores(){
    for(count = 0; count < barras.length; count++){
        barras[count].style.height = Math.floor((Math.random() * 200) + 10) + "px";
    }
}

function addNode(){
    for(count = 0; count < barras.length; count++){
        barras[count].style.height = '20px';
    }
    document.querySelector('.divDasBarras').appendChild(barras[0].cloneNode(true));
    
}

function organizar(){
    timeOut = setInterval(organizarDeFato, 500);
}

function organizarDeFato(){
    contadorDeVezes++;
    for(count = 0; count < barras.length - 1; count++){


        if(parseInt(barras[count].style.height, 10) > parseInt(barras[count+1].style.height, 10)){ //O teste está funcionando
            atual = barras[count].style.height;
            proximo = barras[count+1].style.height;

            //barras[count+1] = atual;
            //barras[count] = proximo;
            barras[count+1].style.height = atual;
            barras[count].style.height = proximo;
        }
    }

    if(contadorDeVezes == barras.length){
        clearInterval(timeOut);
    }


}

