const tituloProjeto = document.querySelector('.titulo-projeto');

typeWriter(tituloProjeto);

function typeWriter(elemento){
    

const textoArrey = elemento.innerHTML.split('');

elemento.innerHTML ='';

textoArrey.forEach((caracter, i) => {
    
    setTimeout(function () {

     elemento.innerHTML += caracter;} , 75 * i )
}); 
    
}
