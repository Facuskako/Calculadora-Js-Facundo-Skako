let montoIngresado = parseInt(prompt("Ingresa tu monto"));
let cuotasAPagar = parseInt(prompt("Ingresa la cant. de cuotas. (3,6,9,12)"))
let montoAPagar = 0





const numeroDeCoutas = [3, 6, 9, 12];

//MONTOS A PAGAR//
montoAPagar = montoIngresado / cuotasAPagar

for(let i = 0; i < 4; i++){
    if(cuotasAPagar == 3)[
        console.log("Con 3 cuotas, pagas " + montoAPagar + " $")
    ]
    if(cuotasAPagar == 6)[
        console.log("Con 6 cuotas, pagas " + montoAPagar + " $")
    ]
    if(cuotasAPagar == 9)[
        console.log("Con 9 cuotas, pagas " + montoAPagar + " $")
    ]
    if(cuotasAPagar == 12)[
        console.log("Con 12 cuotas, pagas " + montoAPagar + " $")
    ]
    else(cuotasAPagar == 1,2,4,5,7,8,10,11,13)
}

const interesAgregado = [0.15, 0.20, 0.25, 0.30];
for(let i = 0; i < 4; i++){
    if(cuotasAPagar == 3)[
        interesAgregado[0]
    ]
    if(cuotasAPagar == 6)[
        interesAgregado[1]
    ]
    if(cuotasAPagar == 9)[
        interesAgregado[2]
    ]
    if(cuotasAPagar == 12)[
        interesAgregado[3]
    ]
}

function interes(montoIngresado,interesAgregado){
    return  montoIngresado* interesAgregado[i]
    
    
}
function mostrar(mensaje){
    console.log("Tu recargo x cuotas es de")
}

let montoFinal = interes(montoIngresado, interesAgregado)

console.log("Tu recargo x cuota es de " + montoIngresado + " $")

