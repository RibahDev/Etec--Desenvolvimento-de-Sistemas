/*8)	Faça um programa para o cálculo de uma folha de pagamento, sabendo que os descontos são do imposto de Renda, que depende do salário bruto (conforme tabela abaixo) e 3% para o Sindicato e que o FGTS corresponde a 11% do salário bruto, mas não é descontado (é a empresa que deposita.)
O salário líquido corresponde ao salário bruto menos os descontos O programa deverá pedir ao usuário o valor da sua hora e a quantidade de horas trabalhadas no mês.

Desconto do IR;
b. Salário Bruto ate R$900,00 (inclusive) – Isento;
c. Salário Bruto de R$ 1500, 00 (inclusive) – desconto de 5%;
d. Salario bruto até R$ 2500,00 (Inclusive) – desconto de 10%;
e. Salário bruto acima de 2500 – Desconto de 20%.


Imprima na tela as informações, dispostas conforme o exemplo abaixo, no exemplo valor da hora é 5 e a quantidade de horas é 220.  
Salário bruto (5 * 220)           : R$   1100,00
( - ) Sindicato 3%
( – ) IR (5%)                     : R$     55,00
( – ) INSS ( 10% )                 : R$     110,00
FGTS ( 11%)                       : R$     121,00
Total de descontos                 : R$     165,00
Salário Líquido                   : R$     935,00    
*/

let valorHora = Number(prompt("Digite o valor equivalente a sua hora de trabalho:"));
let qtdHoras = Number(prompt("Agora digite quantidade de horas trabalhadas no mês:"));
let salarioBruto = valorHora * qtdHoras;
let descontoInss = salarioBruto * 0.10;
let descontoIr = salarioBruto * 0.5;
let descontoSindicato = salarioBruto * 0.03;
let fgts = salarioBruto * 0.11;


 if(salarioBruto < 900) {
    let totalDescontos = fgts + descontoInss + descontoIr + descontoSindicato;
    let salarioLiquido = salarioBruto - descontoInss - descontoIr;
    alert(`Salário Bruto:R$${salarioBruto}\n Desconto Sindicato: 0 \n Desconto IR:R$${descontoIr} \n Desconto INSS:R$${descontoInss} \n Desconto FGTS:R$${fgts} \n Total de descontos:R$${totalDescontos.toFixed(2)} \n Salário Líquido:R$${salarioLiquido}`);
 }