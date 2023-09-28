const horas = document.getElementById('horas');
const minutos = document.getElementById('minutos');
const segundos = document.getElementById('segundos');

const relogio = setInterval(function hora () {
    let dataAtual = new Date();
    let hr = dataAtual.getHours();
    let min = dataAtual.getMinutes();
    let sec = dataAtual.getSeconds();

    horas.textContent = hr;
    minutos.textContent = min;
    segundos.textContent = sec;
});

function zeroEsquerda (num, zeros) {
    return String(num).padStart(zeros, '0');
}
