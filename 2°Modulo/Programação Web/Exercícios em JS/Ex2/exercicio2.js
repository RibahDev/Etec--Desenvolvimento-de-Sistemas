/*2) As organizações CSM resolveram dar um aumento de salário aos seus colaboradores e lhe contrataram para desenvolver o programa que 
calculará os reajustes.
Faça um programa que recebe o salário de um colaborador e o reajuste segundo o seguinte critério, baseado no salário atual; 
b. Salários até R$ 2800,00 (incluindo): aumento de 20%; 
c. Salários entre R$ 2800,00 e R$7000,00: aumento de 15%; 
d. Salários entre R$ 7000,00 e R$ 15000,00: aumento de 10%; 
e. Salários de R$ 15000,00 em diante: aumento de 5% 
Após o aumento ser realizado; informe na tela; 
O salário antes do reajuste; 
O percentual de aumento aplicado; 
O valor do aumento; 
O novo salário, após o aumento.  */

let salarioAtual = Number(prompt("Digite o valor do seu salário atual:"));

if(salarioAtual <= 2800) {
    let reajuste = salarioAtual + (salarioAtual * 0.20);
    alert(`Seu salário com reajuste de 20% será de ${reajuste}`);
}else if(salarioAtual < 7000) {
    let reajuste = salarioAtual + (salarioAtual * 0.15);
    alert(`Seu salário com reajuste de 15% será de ${reajuste}`);
}else if(salarioAtual < 15000) {
    let reajuste = salarioAtual + (salarioAtual * 0.10);
    alert(`Seu salário com reajuste de 10% será de ${reajuste}`);
}else {
    let reajuste = salarioAtual + (salarioAtual * 0.05);
    alert(`Seu salário com reajuste de 5% será de ${reajuste}`);
}