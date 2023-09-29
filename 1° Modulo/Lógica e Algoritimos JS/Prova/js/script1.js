alert("1 - DOMINGO; 2 - SEGUNDA-FEIRA; 3 - TERÇA-FEIRA; 4 - QUARTA-FEIRA; 5 - QUINTA-FEIRA; 6 - SEXTA-FEIRA; 7 - SABADO");
var num = Number(prompt('Digite um número de 1 a 7'));
if (num === 1) {
    alert(`Domingo`);
} else if (num === 2) {
    alert('Segunda-feira');
} else if (num === 3) {
    alert(`Terça-feira`);
} else if (num === 4) {
    alert('Quarta-feira');
} else if (num === 5) {
    alert('Quinta-feira');
} else if (num === 6) {
    alert('Sexta-feira');
} else if (num === 7) {
    alert('Sabado');
} else {
    alert('Comando inválido!')
}