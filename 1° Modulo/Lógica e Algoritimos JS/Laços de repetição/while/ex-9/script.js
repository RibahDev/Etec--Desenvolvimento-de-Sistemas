//  2) - 2)	Faça um programa que receba uma senha formada de quatro números inteiros, verifique se a senha está correta e, caso não esteja, solicite novamente a senha. Se a senha entrada for a correta, deverá ser apresentada a mensagem “Senha Correta”, caso contrário, “Senha Incorreta”.

var senha = Number(prompt('Digite uma senha de até 4 Números:'));
var senhaCorreta = senha;

while(senha != senhaCorreta) {
    if(senha.toString().length != 4){
        alert("Sua senha deve conter 4 caracteres");
    }

    alert("Senha incorreta, Digite novamente!");
    senha = Number(prompt('Digite uma senha de até 4 Números:'));
}

alert("Senha correta!");

// ---------------------------------

// var validando = 0;
// var reverse = senha.toString();

// else {
//     prompt("Digite sua senha:");

//     while(senha != senha) {
//         alert("Senha incorreta, Digite novamente!");
//         validando++;
//     }
// }