var numa = Number(prompt("Digite o primeiro valor:"));
var numb = Number(prompt("Digite o segundo valor:"));
if(numa < numb){
alert(`Digite o valor maior primeiro!`);
}else if(numa % numb === 0) {
    alert(`O valor ${numa} é multiplo de ${numb}.`);
} else {
    alert(`O valor ${numa} não é multiplo de ${numb}.`)
}