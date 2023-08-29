/*10) Um banco concederá um crédito especial aos seus clientes, variável com o saldo médio no último ano. Faça um algoritmo que leia o saldo médio de um cliente e calcule o valor do crédito de acordo com a tabela abaixo. Mostre uma mensagem informando o saldo médio e o valor do crédito.
    */

var sald = Number(prompt("Digite o seu Saldo Médio do útlimo ano:"));
if(sald < 200) {
    alert(`Seu saldo médio é ${sald} e seu crédito é de 0`)
}