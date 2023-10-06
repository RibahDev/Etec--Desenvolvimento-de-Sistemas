// 7)Escreva um programa que leia um número inteiro N pelo teclado e:
// 	a) indique se N é um número primo;
// 	b) imprima os números primos até N;
// 	c) imprima os N primeiros números primos.


var numInteiro = Number(prompt("Digite um número inteiro:"));

for (var i = 2; i < numInteiro; i++) {
    if(numInteiro % i === 0) {
        alert(`${numInteiro} não é primo.`);
        break;
        
    } else{
        alert(`${numInteiro} é primo.`);
        for (var imp = 1; imp < numInteiro; imp++) {
            if(imp % imp !== 0) {
                imp += i;
                alert(imp);
            }
        }
    }
}



