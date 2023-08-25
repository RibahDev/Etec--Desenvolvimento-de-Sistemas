var num1 = Number(prompt("Digite o primeiro valor:"));
var num2 = Number(prompt("Digite o segundo valor:"));
var num3 = Number(prompt("Digite o terceiro valor:"));
if (num1 > num2 && num2 > num3){
    alert(`Oderm crescente: ${num3},${num2},${num1}`);
}else if (num1 > num2 && num2 < num3) {
    alert(`Ordem crescente: ${num2},${num3} e ${num1}`);
} else if(num2 > num1 && num1 > num3){
    alert(`Ordem crescente: ${num3},${num1} e ${num2}`);
} else if(num2 > num1 && num1 < num3) {
    alert(`Ordem crescente: ${num1}, ${num3} e ${num2}`);
} else if (num3 > num2 && num2 < num1) {
    alert(`Ordem crescente: ${num2}, ${num1} e ${num3}`);
} else {
    alert(`Ordem crescente: ${num3}, ${num1} e ${num1}`);
}