function troca(numero) {
    const texto = document.getElementById("texto");
    if(numero == 1) {
        texto.innerText = "Bom dia!"
    }else if(numero == 2) {
        texto.innerText = "Boa tarde!"
    } else if(numero == 3){
        texto.innerText = "Boa noite!"
    }
}
