


// ANIMAÇÃO


const discricao = document.querySelector('.Discricao');


typeWriter(discricao);


function typeWriter(elemento){
    

const textoArrey = elemento.innerHTML.split('');

elemento.innerHTML ='';

textoArrey.forEach((caracter, i) => {
    
    setTimeout(function () {

     elemento.innerHTML += caracter;} , 75 * i )
}); 
    
}





