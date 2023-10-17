// 7)Escreva um programa que leia um número inteiro N pelo teclado e:
// 	a) indique se N é um número primo;
// 	b) imprima os números primos até N;
// 	c) imprima os N primeiros números primos.

var numInteiro = Number(prompt("Digite um número inteiro:"));
var numPrimo = verifPrimo(numInteiro);
// Letra (A)
if (numPrimo == true) {
    alert(`${numInteiro} é primo!`);
}else {
    alert(`${numInteiro} não é primo`);
};
// Letra (B)
for (var i = 1; i <= numInteiro; i++) {
    if(verifPrimo(i) == true){
    alert(i);
    }
};
// Letra (C)


function verifPrimo(numInteiro){
    var contDiv = 0;
    for (let i = 1; i <= numInteiro; i++) {
        if(numInteiro % i === 0) {
            contDiv++;
        }
    }
    if(contDiv == 2) {
        return true;
    }else {
        return false;
    }
};
