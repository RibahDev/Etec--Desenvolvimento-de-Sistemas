
var idade = Number(prompt("Digite sua idade:"));
if (idade >=18 && idade < 45) {
    if (idade === 24) {
        alert('GAY KKKKJ');
    } else {
        alert("Bem Vindo a vida adulta, Jovem Adulto(a).");
    }
    
} else if ( idade >= 45 && idade <= 65){
    alert("Você esta aproveitando a vida ? Adulto(a)/Coroa.")

}else if (idade > 65 && idade <= 100) {
    alert("Você já aproveitou a vida, descanse :)")
} else if(idade > 100){
    alert("R.I.P ")
}
else {
    alert("Aproveite a vida! Jovem.")
}