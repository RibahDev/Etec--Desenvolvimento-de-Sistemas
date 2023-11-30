let iconMenu = document.querySelector('#icone-menu');
let menu = document.querySelector('.menu');

iconMenu.onclick = () => {
    iconMenu.classList.toggle('bx-x');
    menu.classList.toggle('abrir');
}

const sr = ScrollReveal ({
    distance:'65px',
    duration:2600,
    delay:450,
    reset:true
});

sr.reveal('.eminem-texto',{delay:200,origin:'top'});
sr.reveal('.eminem-imagem',{delay:450,origin:'top'});
sr.reveal('.icones',{delay:500,origin:'left'});
sr.reveal('.rolagem',{delay:500,origin:'right'});