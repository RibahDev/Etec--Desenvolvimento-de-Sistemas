/*6)	Faça um algoritmo que leia do usuário, os nomes de dois times e o placar de um jogo de futebol (os gols de cada time) e informa se o resultado foi um empate, se a vitória foi do primeiro time ou do segundo time.*/

let primeiroTime = prompt("Escolha o primeiro time:");
let segundoTime = prompt("Agora o segundo time:");
let golsTime1 = Number(prompt(`Digite o número de gols para : ${primeiroTime}`));
let golsTime2 = Number(prompt(`Digite o número de gols para : ${segundoTime}`));

if(golsTime1 > golsTime2) {
    alert(`Vitória para ${primeiroTime}, placar: ${golsTime1} X ${golsTime2}`);
}else if(golsTime1 < golsTime2) {
    alert(`Vitória para ${segundoTime}, placar: ${golsTime2} X ${golsTime1}`);
} else if ( golsTime1 === golsTime2) {
    alert(`Empate entre ${primeiroTime} ${golsTime1} X ${golsTime2} ${segundoTime} `)
}else {
    alert("Por favor corrija os valores!");
}