
// ANIMAÇÃO Scroll

window.sr = ScrollReveal({ reset:true});
ScrollReveal({ distance: '40px' });
sr.reveal('.perfil-img', {duration : 3000, origin: 'right'})


// ANIMAÇÃO MÁQUINA DE ESCREVER

const perfil = document.querySelector('.perfil');
typeWriter(perfil);


function typeWriter(elemento){
    

const textoArrey = elemento.innerHTML.split('');

elemento.innerHTML ='';

textoArrey.forEach((caracter, i) => {
    
    setTimeout(function () {

     elemento.innerHTML += caracter;} , 75 * i )
}); 
}