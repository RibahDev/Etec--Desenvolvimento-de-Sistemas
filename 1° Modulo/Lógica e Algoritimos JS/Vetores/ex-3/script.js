// 3) 3.	Crie um programa que solicite a entrada de 5 números pelo usuário, armazenando-os em um vetor, e então monte outro vetor com os valores do primeiro multiplicados por 2, e exiba os valores dos dois vetores na tela.

let x = [];

for(let i = 0; i < 5; i++) {
    let num = Number(prompt(`Digite o  ${i + 1}º número`));
    x.push(num);
}
var soma = [];

for(let i = 0; i < x.length; i++) {
    soma += x[i] * 2;

}
alert(`Valores do primeiro vetor ${x}, valores multiplicados ${soma}`);