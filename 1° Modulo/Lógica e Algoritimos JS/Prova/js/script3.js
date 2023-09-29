alert('Informe a altura em metros usando "."')
const altura = Number(prompt('Informe sua altura'));
const peso = Number(prompt('Informe seu peso'));

var imc = peso/(altura**2).toFixed(2);
imc = imc.toFixed(2)

if (imc > 40) {
    alert(`Seu IMC é ${imc} e você está com obesidade morbida`);
} else if (imc < 40 && imc > 35) {
    alert(`Seu IMC é ${imc} e você está com obesidade moderada`);
} else if (imc < 35 && imc >= 30) {
    alert(`Seu IMC é ${imc} e você está com obesidade leve`);
} else if (imc < 30 && imc >= 25) {
    alert(`Seu IMC é ${imc} e você está com sobrepeso`);
} else if (imc < 25 && imc >=20) {
    alert(`Seu IMC é ${imc} e você está com normal`);
} else if (imc <= 20) {
    alert(`SEU IMC é ${imc} e você está abaixo do normal`);
}
