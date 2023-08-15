let custoFabrica = Number(prompt('Informe o valor do custo de fábrica'))
let distribuidor = custoFabrica * (28/100)
let imposto = custoFabrica * (45/100)

let custoFinal = custoFabrica+distribuidor+imposto

alert(`O custo final sera de ${custoFinal}`)