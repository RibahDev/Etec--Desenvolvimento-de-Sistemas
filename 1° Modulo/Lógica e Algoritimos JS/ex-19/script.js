var num1 = Number(prompt("Digite o primeiro valor:"));
var num2 = Number(prompt("Digite o segundo valor:"));
var num3 = Number(prompt("Digite o terceiro valor:"));
if (num1 > num2 && num1 > num3){
    alert(`O ${num1} é o maior valor entre ${num2} e ${num3}`);
}else if (num2 > num1 && num2 > num3) {
    alert(`O valor ${num2} é maior que ${num1} e ${num3}`);
} else {
    alert(`O valor ${num3} é maior que ${num1} e ${num2}`);
}