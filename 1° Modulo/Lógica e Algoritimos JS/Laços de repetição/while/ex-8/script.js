// 1) - 1)	Faça um programa que leia um conjunto não determinado de valores e mostre o valor lido, seu dobro, seu quadrado e seu cubo.  Finalize a entrada de dados com um valor negativo ou zero.

var valor = Number(prompt("Digite um valor para soma: | 0 para sair"));
var qtdNumeros = 0;
while(valor != 0) {
    alert(`Você digiou ${valor}`);
    
    if(valor > 1) {
        alert(`${valor * 2}`);
        alert(`${valor * valor}`);
        alert(`${valor * valor * valor }`)
    }
    var valor = Number(prompt("Digite um valor para soma: | 0 para sair"));
    qtdNumeros++;
}




