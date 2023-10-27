var pedido = Number(prompt("Digite 1 para começar seu pedido:"));
var qtdLanches = 0;

let valorLanche = 0;
let valorTotal = 0;

while (pedido != 0) {
    let comanda = Number(prompt("Digite o ID do Lanche escolhido."));
    let qtdLanches = Number(prompt("Agora digite a quantidade do item."));


    if(comanda == 100) {
        valorLanche = 1.70 * qtdLanches;
        valorTotal += valorLanche;
    }
    if(comanda == 101) {
        valorLanche = 2.30 * qtdLanches;
        valorTotal += valorLanche;
    }
    if(comanda == 102) {
        valorLanche = 2.60 * qtdLanches;
        valorTotal += valorLanche;
    }
    if(comanda == 103) {
        valorLanche = 2.40 * qtdLanches;
        valorTotal += valorLanche;
    }
    if(comanda == 104) {
        valorLanche = 2.50 * qtdLanches;
        valorTotal += valorLanche;
    }
    if(comanda == 105) {
        valorLanche = 1.00 * qtdLanches;
        valorTotal += valorLanche;
    }
    
    // os demais 

    
    pedido = Number(prompt("Digite 0 para finalizar ou 1 para continuar"));
}

alert(`Valor total do seu pedido: ${valorTotal}. Vamos para a forma de pagamento ;)`);