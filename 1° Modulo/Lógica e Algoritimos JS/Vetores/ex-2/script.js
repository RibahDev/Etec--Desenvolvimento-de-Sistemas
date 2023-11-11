//  2) Faça um algoritmo que leia 6 números e armazene em um vetor. Depois, some os 3 primeiros elementos deste vetor.
let x = [];

for(let i = 0; i < 6; i++) {
    let num = Number(prompt('Digite 6 números:'));
    x.push(num);
}

const valorX = x.slice(0, 3);
console.log(valorX);
