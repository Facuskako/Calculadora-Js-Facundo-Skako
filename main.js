let montoIngresado = parseInt(prompt("Ingresa tu monto"));
let montoAPagar

    const numeroDeCoutas = [3, 6, 9, 12];

    for(let i = 0; i < 4; i++){
        montoAPagar = montoIngresado / numeroDeCoutas[i]
        alert("Con " + numeroDeCoutas[i] + " cuotas, Pagas " + montoAPagar + " $"); 
    }
