/* Exercícios de revisão

1) Um posto está vendendo combustíveis com a seguinte tabela de descontos:    

Álcool: 
     Até 20 litros: desconto de 3% por litro 
     Acima de 20 litros: Desconto de 5% por litro. 

 Gasolina: 
     Até 20 litros: desconto de 4% por litro 
     Acima de 20 litros, desconto de 6% por litro

Escreva um algoritmo que leia o número de litros vendidos, o valor do litro de combustível e o tipo de combustível 
(codificado da seguinte forma: A-álcool. G-gasolina), calcule e imprima o valor a ser pago pelo cliente. */

let tipoCombustivel = prompt("Selecione o tipo de combustível: A - ácool e G - gasolina");
let qtdCombustivel = Number(prompt("Digite a quantidade que deseja comprar em Litros:"));
let valorLitro

if(tipoCombustivel.toUpperCase() === "A") {
    valorLitro = 4;
    if(qtdCombustivel <= 20) {
        let valorSemDesconto = valorLitro * qtdCombustivel;
        let valorFinal = valorSemDesconto - (valorSemDesconto * 0.03);
        alert(`Você Comprou ${qtdCombustivel} Litros de Álcool (R$4,00Lt) Total R$${valorFinal.toFixed(2)}`);
    }else {
        valorLitro = 4;
        let valorSemDesconto = valorLitro * qtdCombustivel;
        let valorFinal = valorSemDesconto - (valorSemDesconto * 0.05);
        alert(`Você Comprou ${qtdCombustivel} Litros de Álcool (R$4,00Lt) Total R$${valorFinal.toFixed(2)}`);
    }
}else if(tipoCombustivel.toUpperCase() === "G") {
    valorLitro = 5;
    if(qtdCombustivel <= 20) {
        let valorSemDesconto = valorLitro * qtdCombustivel;
        let valorFinal = valorSemDesconto - (valorSemDesconto * 0.04);
        alert(`Você Comprou ${qtdCombustivel} Litros de Álcool (R$4,00Lt) Total R$${valorFinal.toFixed(2)}`);
    }else {
        valorLitro = 5;
        let valorSemDesconto = valorLitro * qtdCombustivel;
        let valorFinal = valorSemDesconto - (valorSemDesconto * 0.06);
        alert(`Você Comprou ${qtdCombustivel} Litros de Álcool (R$4,00Lt) Total R$${valorFinal.toFixed(2)}`);
    }
}