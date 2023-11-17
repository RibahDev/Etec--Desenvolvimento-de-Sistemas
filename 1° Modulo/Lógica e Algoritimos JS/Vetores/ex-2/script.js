//  2) Faça um algoritmo que leia 6 números e armazene em um vetor. Depois, some os 3 primeiros elementos deste vetor.
let x = [];

for(let i = 0; i < 6; i++) {
    let num = Number(prompt(`Digite o  ${i + 1}º número`));
    x.push(num);
}
var soma = 0;

for(let i = 0; i < x.length; i++) {
    soma += x[i];
    if(i === 2) {
        break;
    } 
}
alert(soma);