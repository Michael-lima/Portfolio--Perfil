
window.sr = ScrollReveal({ reset:true});
ScrollReveal({ distance: '50px' });
sr.reveal('.img-logo', {duration : 3000, origin: 'right'})


window.sr = ScrollReveal({ reset:true});
ScrollReveal({ distance: '50px' });
sr.reveal('h2', {duration : 3000, origin: 'right'})




const discricao = document.querySelector('h1');

typeWriter(discricao);


function typeWriter(elemento){
    

const textoArrey = elemento.innerHTML.split('');

elemento.innerHTML ='';

textoArrey.forEach((caracter, i) => {
    
    setTimeout(function () {

     elemento.innerHTML += caracter;} , 100 * i )
}); 
    
}
