var nota1 = Number(prompt("Digite sua primeira nota:"));
var nota2 = Number(prompt("Digite sua segunda nota:"));
var nota3 = Number(prompt("Digite a terceira nota:"));
var media = ((nota1 * 4) + (nota2 * 3) + (nota3 * 4)) / 10;
if (media < 7) {
    alert(`Sua média é ${media} você foi REPROVADO!`);
}else {
    alert(`Sua média foi ${media} você foi APROVADO! Parabéns.`);
}
