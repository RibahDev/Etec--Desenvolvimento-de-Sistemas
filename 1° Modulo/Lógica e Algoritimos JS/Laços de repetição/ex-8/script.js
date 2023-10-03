// 7)Escreva um programa que leia um número inteiro N pelo teclado e:
// 	a) indique se N é um número primo;
// 	b) imprima os números primos até N;
// 	c) imprima os N primeiros números primos.


var numInteiro = Number(prompt("Digite um número inteiro:"));
var num = 0

for (var i = 2; i < numInteiro; i++) {
    if(numInteiro / i === 0) {
        console.log('não é primo');
    } else {
        console.log('e primo');
    }
}

// for (num = 0; num <= numInteiro; num++) {
//     if (num / num !== 0 && num / 1 !== 0) {
//         alert(`O número ${num} é primo!`);
//     } else {
//         alert(`o número ${num} não é primo!`);
//     }
// }

