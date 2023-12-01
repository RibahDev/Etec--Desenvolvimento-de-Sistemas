
let i = 0;
var vetor = [];

while(i < 5){
    let num = parseInt(prompt("Digite um numero:"));
    vetor.push(num);
    i++;
}

var numPar = [];

for (let i = 0; i < vetor.length; i++){
    if (vetor[i] % 2 === 0){
        numPar.push(vetor[i]);
    }
}

alert(`Números pares: ${par}`);