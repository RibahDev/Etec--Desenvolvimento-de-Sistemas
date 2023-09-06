var form = document.querySelector('#form');

var respostaDiv = form.querySelector('#respostaDiv');

var pergunta = form.querySelector('#pergunta');


function recebeEventoForm(evento) {
    evento.preventDefault();

var idade = pergunta.value;

if (idade >= 18 && idade < 45) {
        respostaDiv.innerHTML = "<p>Bem Vindo a vida adulta, Jovem Adulto(a).</p>";
} else if ( idade >= 45 && idade <= 65){
    respostaDiv.innerHTML = "<p>Você esta aproveitando a vida ? Adulto(a)/Coroa.</p>";

} else if (idade > 65 && idade <= 100) {
    respostaDiv.innerHTML = "<p>Você já aproveitou a vida, descanse :)</p>";
} else if(idade > 100){
    respostaDiv.innerHTML = "<p>R.I.P </p>";
} else {
    respostaDiv.innerHTML = "<p>Aproveite a vida! Jovem.</p>";
}

}
form.addEventListener('submit', recebeEventoForm);

