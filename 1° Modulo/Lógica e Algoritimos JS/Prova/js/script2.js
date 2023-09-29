const primeiroProduto = prompt("Digite o nome do primeiro produto:");
const valorPrimeiroProduto = Number(prompt("Digite o valor do primeiro produto:"));
const segundoProduto = prompt("Digite o nome do segundo produto:");
const valorSegundoProduto = Number(prompt("Digite o valor do segundo produto:"));
const terceiroProduto = prompt("Digite o nome do terceiro produto:");
const valorTerceiroProduto = Number(prompt("Digite o valor do terceiro produto:"));

if(valorPrimeiroProduto < valorSegundoProduto && valorPrimeiroProduto < valorTerceiroProduto) {

    alert(`O produto: ${primeiroProduto} tem o melhor preço:R$${valorPrimeiroProduto}. Finalizar compra? `);

}else if (valorSegundoProduto < valorPrimeiroProduto && valorSegundoProduto < valorTerceiroProduto) {

    alert(`O produto: ${segundoProduto} tem o melhor preço:R$${valorSegundoProduto}. Finalizar compra? `);

}else  if(valorTerceiroProduto < valorPrimeiroProduto && valorTerceiroProduto < valorSegundoProduto){
    
    alert(`O produto: ${terceiroProduto} tem o melhor preço:R$${valorTerceiroProduto}. Finalizar compra? `);
    
}else if(valorPrimeiroProduto == valorSegundoProduto && valorSegundoProduto == valorTerceiroProduto){

    alert("Produtos com valores iguais, qualqur um será uma ótima compra!");

}else if(valorPrimeiroProduto == 0 && valorSegundoProduto == 0 && valorTerceiroProduto == 0){

    alert("Valores invalidos!");
    
}