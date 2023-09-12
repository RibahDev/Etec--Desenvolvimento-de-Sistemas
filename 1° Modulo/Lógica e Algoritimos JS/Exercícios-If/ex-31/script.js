/*7)	As organizações CSM resolveram dar um aumento de salário aos seus colaboradores e lhe contrataram para desenvolver o programa que calculará os reajustes.  
Faça um programa que recebe o salário de um colaborador e o reajuste segundo o seguinte critério, baseado no salário atual;
•	b. Salários até R$ 2800,00 (incluindo): aumento de 20%;
•	c. Salários entre R$ 2800,00 e R$7000,00: aumento de 15%;
•	d. Salários entre R$ 7000,00 e R$ 15000,00: aumento de 10%;
•	e. Salários de R$ 15000,00 em diante: aumento de 5%
Após o aumento ser realizado; informe na tela;
•	O salário antes do reajuste;
•	O percentual de aumento aplicado;
•	O valor do aumento;
•	O novo salário, após o aumento.  
*/
let salarioAtual = Number(prompt("Digite o seu salário atual:"));
let aumento
let aumentoSalario

if(salarioAtual <= 2800) {

    aumento = salarioAtual * 0.2;
    aumentoSalario = aumento + salarioAtual;
    alert(`Salario atual: ${salarioAtual} + Aumento de 20% (R$${aumento}). Seu salário atualizado: ${aumentoSalario}`);   

} else if(salarioAtual > 2800 && salarioAtual <= 7000) {

    aumento = salarioAtual * 0.15;
    aumentoSalario = aumento + salarioAtual;
    alert(`Salario atual: ${salarioAtual} + Aumento de 15% (R$${aumento}). Seu salário atualizado:R$${aumentoSalario}`);

} else if(salarioAtual > 7000 && salarioAtual < 15000) {

    aumento = salarioAtual * 0.10;
    aumentoSalario= aumento + salarioAtual;
    alert(`Salario atual: ${salarioAtual} + Aumento de 10% (R$${aumento}). Seu salário atualizado: ${aumentoSalario}`);

} else if(salarioAtual >= 15000) {

    aumento = salarioAtual * 0.05;
    aumentoSalario = aumento + salarioAtual;
    alert(`Salario atual: ${salarioAtual} + Aumento de 5% (R$${aumento}). Seu salário atualizado: ${aumentoSalario}`);
    
} else {
    alert("Erro! Corrija os valores.")
}

