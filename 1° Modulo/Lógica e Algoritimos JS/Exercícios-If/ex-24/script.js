/*10) Um banco concederá um crédito especial aos seus clientes, variável com o saldo médio no último ano. Faça um algoritmo que leia o saldo médio de um cliente e calcule o valor do crédito de acordo com a tabela abaixo. Mostre uma mensagem informando o saldo médio e o valor do crédito.
De 0 a 200   --> Nenhum crédito
   De 201 a 400 --> 20% do valor do saldo médio
   De 401 a 600 --> 30% do valor do saldo médio
   Acima de 601 --> 40% do valor do saldo médio
    */

var sald = Number(prompt("Digite o seu Saldo Médio do útlimo ano:"));

var cred = 0;
if(sald < 200) {
    alert(`Seu saldo médio é ${sald} e seu crédito é de 0`);
}else if (sald > 200 && sald < 400) {
    cred = sald*(20/100);
    alert(`Seu saldo médio é de ${sald} e seu crédito é de ${cred.toFixed(2)}`);
} else if (sald > 400 && sald < 600) {
    cred = sald*(30/100);
    alert(`Seu saldo médio é ${sald} e seu crédito é de ${cred.toFixed(2)}`);
} else {
    cred = sald*(40/100);
    alert(`Seu saldo médio é de ${sald} e seu crédito é de ${cred.toFixed(2)}`);
}