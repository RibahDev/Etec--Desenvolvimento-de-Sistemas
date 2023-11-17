//  4) 4.	Faça um algoritmo que receba 5 números inteiros, armazene-os em um vetor, em seguida, descubra e exiba o maior número.

let x = [];

for(let i = 0; i < 5; i++) {
    let num = Number(prompt(`Digite o  ${i + 1}º número`));
    x.push(num);
}

let maiorValor = Math.max(...x);
alert(`O maior número do vetor é ${maiorValor}`);