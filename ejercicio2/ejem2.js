let pagoCompleto = 7000000;
let pago2Cuotas = pagoCompleto/2;
let pago3Cuotas = pagoCompleto/3;

let eleccionUsuario = prompt(`\n1. pago completo\n2. pago a dos cuotas\n3. pago a tres cuotas`);  

// if(eleccionUsuario === `1`){
//     alert(`su pago final es de: ${pagoCompleto-(pagoCompleto*0.05)}`);

// } else if(eleccionUsuario ===  `2`){

//     alert(`su pago final es de: ${pago2Cuotas+(pagoCompleto*0.02)} por mes\nEl valor completo es ${(pago2Cuotas+(pagoCompleto*0.02))*2}`)

// } else if (eleccionUsuario === `3`){
//     alert(`su pago final es de: ${pago3Cuotas+(pagoCompleto*0.02)} por mes\nEl valor completo es ${(pago3Cuotas+(pagoCompleto*0.02))*3}`)
// } else {
//    alert(`no es un numero valido`)
// }


switch (eleccionUsuario) {
    case '1':
        alert(`su pago final es de: ${pagoCompleto-(pagoCompleto*0.05)}`);
        break;
    case '2':
        alert(`su pago final es de: ${pago2Cuotas+(pagoCompleto*0.02)} por mes\nEl valor completo es ${(pago2Cuotas+(pagoCompleto*0.02))*2}`)
        break;
    case '3':
        alert(`su pago final es de: ${pago3Cuotas+(pagoCompleto*0.02)} por mes\nEl valor completo es ${(pago3Cuotas+(pagoCompleto*0.02))*3}`)
        break;
    default:
        alert(`no es un numero valido`)
        break;
}