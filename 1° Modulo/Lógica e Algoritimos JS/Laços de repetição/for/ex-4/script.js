// 3) Faça um algoritmo que imprima a quantidade de números pares e a quantidade de números ímpares em um intervalo digitado pelo usuário.
let primeiroValor = Number(prompt("Digite um valor inicial"));
let segundoValor = Number(prompt("Digite um valor maximo"));
var numImpar = 0;
var numPar = 0;
    if(primeiroValor > segundoValor) {
        console.log("Digite o valor menor primeiro!");
    }else{
        for(let i = primeiroValor; i <= segundoValor; i++){
            if(i % 2 == 0) {
                numPar++;
            }else {
                numImpar++;
            }
    }
};
console.log(numPar);
console.log(numImpar);