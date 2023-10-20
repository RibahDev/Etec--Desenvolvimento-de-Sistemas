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
var i = 1;
while(i <= numInteiro) {
    if(verifPrimo(i) == true){
    alert(i);
    }
    i++;
};
// Letra (C)
var ContPrimos = 0;
var i =1; 
while(i <= Infinity) {
    if(verifPrimo(i) == true) {
        alert(i);
        ContPrimos++
    }if (ContPrimos == numInteiro) {
        break;
    }
    i++
}

function verifPrimo(numInteiro){
    var contDiv = 0;
    let i = 1; 
    while (i <= numInteiro) {
        if(numInteiro % i === 0) {
            contDiv++;
        }
    i++
    }
    if(contDiv == 2) {
        return true;
    }else {
        return false;
    }
};
