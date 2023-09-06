let kmPercorrido= Number(prompt('Informe quantos Km foram percorridos'))
let diaAlugado = Number(prompt('Por quantos dias o carro foi alugado'))
alert('a diaria do carro é R$ 90,00 e sera cobrado R$ 0,20 por km percorrido')
let precoKm = kmPercorrido * 0.20
let precoDia = diaAlugado*90
let precoTotal = precoDia + precoKm
confirm(`O valor total a ser pago pelo carro alugado sera de ${precoTotal}R$`)