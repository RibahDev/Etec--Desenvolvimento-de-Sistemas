let n1 = Number(prompt('Informe o primeiro número'));
let n2 = Number(prompt('Informe o segundo número'));
let n3 = Number(prompt('Informe o terceiro número'));

if (n1 > n2 && n2 > n3) {
    alert(`A ordem do menor pro maior é: ${n3}, ${n2} e ${n1}`);
} else if (n1 > n3 && n3 > n2) {
    alert(`A ordem do menor pro maior é: ${n2}, ${n3} e ${n1}`);
} else if (n2 > n1 && n1 > n3) {
    alert(`A ordem do menor pro maior é: ${n3}, ${n1} e ${n2}`);
} else if (n2 > n3 && n3 > n1) {
    alert(`A ordem do menor pro maior é: ${n1}, ${n3} e ${n2}`);
} else if (n3 > n1 && n1 > n2) {
    alert(`A ordem do menor pro maior é: ${n2}, ${n1} e ${n3}`);
} else if (n3 > n2 && n2 > n1) {
    alert(`A ordem do menor pro maior é: ${n1}, ${n2} e ${n3}`);
}