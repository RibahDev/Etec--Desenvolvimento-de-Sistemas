/*4) Faça um algoritmo que receba 5 números inteiros, armazene-os em um vetor, em seguida, descubra e exiba o maior número. */

let x = [];

for(let i = 0; i < 5; i++) {
    let num = Number(prompt(`Digite o ${i + 1}° número`));
    x.push(num);
}

let maiorNumero = Math.max(...x);
alert(`O maior Valor entre os números é: ${maiorNumero}`)