// 1) 1.	Crie um algoritmo para ler 5 números inteiros, armazene-os em um vetor, e mostre a quantidade de números pares e ímpares deste vetor.
let x = [];
let contadorI = null;
let contadorP = null;


for(let i = 0; i < 5; i++) {
    let num = Number(prompt('Digite 5 números:'));
    x.push(num);
}

for(let i = 0; i < x.length; i++) {
    if(x[i] % 2 == 0) {
        contadorP++;
    }else {
        contadorI++;
    } 
}
alert(contadorP);
alert(contadorI);
