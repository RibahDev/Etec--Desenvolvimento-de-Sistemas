// 3) - Faça um programa que leia números inteiros maiores que zero. Quando for entrado o número zero, o programa deverá apresentar quantos números foram entrados e a média destes.

var numero = null;
var qtdNumero = 0;
var soma = 0;

while (numero != 0) {
    numero = Number(prompt("Digite um valor INTEIRO, ou '0' para prosseguir:"));
    soma += numero;
    qtdNumero++;
}
qtdNumero = qtdNumero - 1;
alert(`Você acrescentou ${qtdNumero} para a média:`);

soma.toString();
alert(`A media de todos os números digitados é: ${soma / qtdNumero}`);

