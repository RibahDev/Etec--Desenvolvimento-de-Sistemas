
let i = 0;
var vetor = [];

while(i < 6){
    let num = parseInt(prompt("Digite um numero:"));
    vetor.push(num);
    i++;
}

var menorValor = Math.min(...vetor);
var numImpar = [];
var media = 0;

for(let i = 0; i < vetor.length; i++){
    if(vetor[i] % 2 === 1){
        numImpar.push(vetor[i]);
    }
    media+=vetor[i]/6
}

alert(`Números impares: ${numImpar}, o menor valor:${menorValor} e a média entre os numeros: ${media}`);