// 7)Escreva um programa que leia um número inteiro N pelo teclado e:
// 	a) indique se N é um número primo;
// 	b) imprima os números primos até N;
// 	c) imprima os N primeiros números primos.


var numInteiro = Number(prompt("Digite um número inteiro:"));
var primo = true;

for (let i = 2; i < numInteiro; i++) {
    if(numInteiro % i === 0) {
        primo = false;
        break;
            
    } 
if (primo) {
    alert(`${numInteiro} é primo!`);
}else {
    alert(`${numInteiro} não é primo`)
}
        
}

for (let i = 2; i < numInteiro; i++) {
    if(numInteiro % i === 0) {
        primo = false;
        null
    } else {
        alert(i++);
    }
    
}