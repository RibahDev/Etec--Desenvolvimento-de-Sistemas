var sal = Number.parseFloat(prompt("Informe o seu Salario:"));
var rec = Number.parseFloat(prompt("Informe o Valor da Receita de vendas:"))
var som = (rec*20/100) + sal
alert(`O valor líquido do seu salario mais 20% das vendas é: ${som}`)