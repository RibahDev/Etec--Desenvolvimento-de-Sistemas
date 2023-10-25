//  2) - 2)	Faça um programa que receba uma senha formada de quatro números inteiros, verifique se a senha está correta e, caso não esteja, solicite novamente a senha. Se a senha entrada for a correta, deverá ser apresentada a mensagem “Senha Correta”, caso contrário, “Senha Incorreta”.

var senha = Number(prompt('Digite uma senha de até 4 Números:'));

while(senha.toString().length != 4){
    alert("Sua senha deve conter 4 caracteres");
    senha = Number(prompt('Digite uma senha de até 4 Números:'));
}

var senhaCorreta = prompt("Confirme a senha:");

while(senha != senhaCorreta) {

    alert("Senha incorreta, Digite novamente!");

    senhaCorreta = prompt("Confirme a senha:");
}

alert("Senha correta!");
