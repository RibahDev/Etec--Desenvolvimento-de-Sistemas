/*
3)	As maçãs custam R$ 0,30 cada se forem compradas menos do que uma dúzia, e R$ 0,25 se forem compradas pelo menos doze. Escreva um programa que leia o número de maçãs compradas, calcule e escreva o valor total da compra.*/
let quantidade = prompt("Até 1 Dúzia a unidade R$30c. A partir disso o valor caipara 25c!Quantas maçãs deseja comprar ?");

    if(quantidade <= 6) {
        let valor = 0.30 * quantidade;
        alert(`Você está levando ${quantidade} e pagará R$${valor}`)
    }else {
        let valor = 0.25 * quantidade;
        alert(`Você está levando ${quantidade} e pagará R$${valor}`)
    }