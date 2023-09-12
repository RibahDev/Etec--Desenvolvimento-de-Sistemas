/*4)	Tendo como entrada a altura e o sexo (codificado da seguinte forma: 1: feminino 2: masculino) de uma pessoa, construa um programa que calcule e imprima seu peso ideal, utilizando as seguintes Fórmulas:
•	Para homens: (72.7 * Altura) – 58 
•	Para mulheres: (62.1 * Altura) – 44.7
*/

let sexo = Number(prompt("Informe seu gênero: 1 - Feminino ou 2 - Masculino"));
let altura = Number(prompt("Agora digite sua altura"));

if(sexo === 1) {
    let imc = (62.1 * altura) - 58;
    alert(`Seu sexo é feminino, seu peso ideal é: ${imc}`);
}else if(sexo === 2) {
    let imc = (72.7 * altura) - 44.7;
    alert(`Seu sexo é Masculino, seu peso ideal é: ${imc}`);
} else {
    alert("Valor incorreto, digite novamente!")
}