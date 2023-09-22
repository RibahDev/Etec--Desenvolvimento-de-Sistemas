var doll = parseFloat(prompt("Digite um valor em Dollar para ser convertido em Real:"));
var cotacao = parseFloat(prompt("Digite o valor da cotação Atual:"))
var conv = doll * cotacao
alert(`O valor de $${doll} convertido em Real é R$${conv}`)