/*5)	Um posto está vendendo combustíveis com a seguinte tabela de descontos:   
Álcool:
    	Até 20 litros: desconto de 3% por litro
 	Acima de 20 litros: Desconto de 5% por litro 99.
Gasolina:
Até 20 litros: desconto de 4% por litro
Acima de 20 litros, desconto de 6% por litro
Escreva um algoritmo que leia o número de litros vendidos, o valor do litro de combustível e o tipo de combustível (codificado da seguinte forma: A-álcool. G-gasolina), calcule e imprima o valor a ser pago pelo cliente.  
*/
let tipoCombustivel = prompt("Selecione o tipo de combustível: A - ácool e G - gasolina");
let qtdCombustivel = Number(prompt("Digite a quantidade que deseja comprar em Litros:"));
let valorLitro

if(tipoCombustivel.toUpperCase() === "A") {
    if(qtdCombustivel <= 20){
        valorLitro = 5;
        let valor = qtdCombustivel * valorLitro * 0.97;
        alert(`Você acabou de comprar ${qtdCombustivel} Litros de álcool por R$${valor.toFixed(2)}`);
    } else {
        valorLitro = 5;
        let valor = qtdCombustivel * valorLitro * 0.95;
        alert(`Você acabou de comprar ${qtdCombustivel} Litros de álcool por R$${valor.toFixed(2)}`);
    }
}else if(tipoCombustivel === "G") {
    if(qtdCombustivel <= 20) {
        valorLitro = 10;
        let valor = qtdCombustivel * valorLitro * 0.96;
        alert(`Você acabou de comprar ${qtdCombustivel} Litros de álcool por R$${valor.toFixed(2)}`);
    } else {
        valorLitro = 10;
        let valor = qtdCombustivel * valorLitro * 0.94;
        alert(`Você acabou de comprar ${qtdCombustivel} Litros de álcool por R$${valor.toFixed(2)}`);
    }
}else {
    alert("Valor incorreto, por favor preencha os passos novamente!");
}