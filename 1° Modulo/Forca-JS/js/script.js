const palavras = ["javascript", "programacao", "bootstrap", "gallo"];
let tentativasUsadas = 0;
let palavraSecreta, palavraOculta;
let botoes = document.querySelector("#botoes");
let letras = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
iniciarJogo();

function iniciarJogo() {
    tentativasUsadas = 0;
    palavraSecreta = palavras[Math.floor(Math.random() * palavras.length)];
    palavraOculta = '';

    for(let i = 0; i < palavraSecreta.length; i++) {
        palavraOculta += "_ ";
    };
    document.querySelector('h2').innerHTML = palavraOculta;

    botoes.innerHTML = '';
    for (let i = 0; i < letras.length; i++) {
        let l = letras[i];
        botoes.innerHTML += `<button id="btn-${l}" class="btn-light me-1 mb-1" onclick="checarLetra('${l}')">${l}</button>`;
    }
};

function checarLetra(letra) {
    let l = document.getElementById('btn-' +letra);
    l.classList.remove('btn-light');
    l.classList.add('btn-danger');
}