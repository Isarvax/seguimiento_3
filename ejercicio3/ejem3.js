let modeloZapato1 = `clasicos`; 
let modeloZapato2 = `running`;
let modeloZapato3 = `basketball`;
let clasico =  500000;
let running = 800000;
let basketball = 1000000
let contador = 0;
let finTransaccion = false;
let precioTotal = 0;
let numberRunning = 0;
let numberClasico = 0;
let numberBasketball = 0; 
let cantidadZapatoActual = 0;


let eleccionClaseZapato = prompt(`\nseleccione tipo de zapato:\n1. clasico\n2. running\n3. basketball`)
let eleccionTallaZapato = prompt(`\nseleccione la talla del zapato, min 35 max 44`)

if ((eleccionTallaZapato>=35 && eleccionTallaZapato<=44) && (eleccionClaseZapato>=1 & eleccionClaseZapato<=3)) {
    cantidadZapatoActual=parseInt(prompt(`Digite la cantidad de zapatos que desea de este tipo con la talla que eligio, \n max: ${5-contador}`))
    switch (eleccionClaseZapato) {
        case '1':
            precioTotal+=clasico;
            numberClasico+=cantidadZapatoActual
            break;
        case '2':
            precioTotal+=running
            numberRunning+=cantidadZapatoActual
            break
        case '3':
            precioTotal+=basketball
            numberBasketball+=cantidadZapatoActual
            break
        default:
            alert('no es un tipo de zapato valido')
            break;
    }
    contador+=cantidadZapatoActual;
} else{
    alert('La talla no es valida o el tipo de zapato es invalido')
}

if (!finTransaccion && contador<=5 && prompt(`desea continuar con la transaccion?\nyes\nno`)=='yes') {
    let eleccionClaseZapato = prompt(`\nseleccione tipo de zapato:\n1. clasico\n2. running\n3. basketball`)
    let eleccionTallaZapato = prompt(`\nseleccione la talla del zapato, min 35 max 44`)
    if ((eleccionTallaZapato>=35 && eleccionTallaZapato<=44) && (eleccionClaseZapato>=1 & eleccionClaseZapato<=3)) {
        cantidadZapatoActual=parseInt(prompt(`Digite la cantidad de zapatos que desea de este tipo con la talla que eligio, \n max: ${5-contador}`))
    switch (eleccionClaseZapato) {
            case '1':
                precioTotal+=clasico;
                numberClasico+=cantidadZapatoActual
                break;
            case '2':
                precioTotal+=running
                numberRunning+=cantidadZapatoActual
                break
            case '3':
                precioTotal+=basketball
                numberBasketball+=cantidadZapatoActual
                break
        
            default:
                alert('no es un tipo de zapato valido')
                break;
        }
        contador+=cantidadZapatoActual;
    } else{
        alert('La talla no es valida o el tipo de zapato es invalido')
    }
} else {
    finTransaccion=true;
    alert(`El valor total es ${precioTotal}, compro en total ${contador} zapatos
        \nrunning: ${numberRunning}\nclasico: ${numberClasico}\nbasketball:${numberBasketball}`)
}


if (!finTransaccion && contador<=5 && prompt(`desea continuar con la transaccion?\nyes\nno`)=='yes') {
    let eleccionClaseZapato = prompt(`\nseleccione tipo de zapato:\n1. clasico\n2. running\n3. basketball`)
    let eleccionTallaZapato = prompt(`\nseleccione la talla del zapato, min 35 max 44`)
    if ((eleccionTallaZapato>=35 && eleccionTallaZapato<=44) && (eleccionClaseZapato>=1 & eleccionClaseZapato<=3)) {
       cantidadZapatoActual=parseInt(prompt(`Digite la cantidad de zapatos que desea de este tipo con la talla que eligio, \n max: ${5-contador}`))
    switch (eleccionClaseZapato) {
            case '1': 
                precioTotal+=clasico;
                numberClasico+=cantidadZapatoActual
                break;
            case '2':
                precioTotal+=running
                numberRunning+=cantidadZapatoActual
                break
            case '3':
                precioTotal+=basketball
                numberBasketball+=cantidadZapatoActual
                break
        
            default:
                alert('no es un tipo de zapato valido')
                break;
        }
        contador+=cantidadZapatoActual;
    } else{
        alert('La talla no es valida o el tipo de zapato es invalido')
    }
} else {
    finTransaccion=true;
    alert(`El valor total es ${precioTotal}, compro en total ${contador} zapatos
        \nrunning: ${numberRunning}\nclasico: ${numberClasico}\nbasketball:${numberBasketball}`)
}

if (!finTransaccion && contador<=5 && prompt(`desea continuar con la transaccion?\nyes\nno`)=='yes') {
    let eleccionClaseZapato = prompt(`\nseleccione tipo de zapato:\n1. clasico\n2. running\n3. basketball`)
    let eleccionTallaZapato = prompt(`\nseleccione la talla del zapato, min 35 max 44`)
    if ((eleccionTallaZapato>=35 && eleccionTallaZapato<=44) && (eleccionClaseZapato>=1 & eleccionClaseZapato<=3)) {
        cantidadZapatoActual=parseInt(prompt(`Digite la cantidad de zapatos que desea de este tipo con la talla que eligio, \n max: ${5-contador}`))
    switch (eleccionClaseZapato) {
            case '1':
                precioTotal+=clasico;
                numberClasico+=cantidadZapatoActual
                break;
            case '2':
                precioTotal+=running
                numberRunning+=cantidadZapatoActual
                break
            case '3':
                precioTotal+=basketball
                numberBasketball+=cantidadZapatoActual
                break
        
            default:
                alert('no es un tipo de zapato valido')
                break;
        }
        contador+=cantidadZapatoActual;
    } else{
        alert('La talla no es valida o el tipo de zapato es invalido')
    }
} else {
    finTransaccion=true;
    alert(`El valor total es ${precioTotal}, compro en total ${contador} zapatos
        \nrunning: ${numberRunning}\nclasico: ${numberClasico}\nbasketball:${numberBasketball}`)
}

if (!finTransaccion && contador<=5 && prompt(`desea continuar con la transaccion?\nyes\nno`)=='yes') {
    let eleccionClaseZapato = prompt(`\nseleccione tipo de zapato:\n1. clasico\n2. running\n3. basketball`)
    let eleccionTallaZapato = prompt(`\nseleccione la talla del zapato, min 35 max 44`)
    if ((eleccionTallaZapato>=35 && eleccionTallaZapato<=44) && (eleccionClaseZapato>=1 & eleccionClaseZapato<=3)) {
        cantidadZapatoActual=parseInt(prompt(`Digite la cantidad de zapatos que desea de este tipo con la talla que eligio, \n max: ${5-contador}`))
    switch (eleccionClaseZapato) {
            case '1':
                precioTotal+=clasico;
                numberClasico+=cantidadZapatoActual
                break;
            case '2':
                precioTotal+=running
                numberRunning+=cantidadZapatoActual
                break
            case '3':
                precioTotal+=basketball
                numberBasketball+=cantidadZapatoActual
                break
        
            default:
                alert('no es un tipo de zapato valido')
                break;
        }
        contador+=cantidadZapatoActual;
    } else{
        alert('La talla no es valida o el tipo de zapato es invalido')
    }
} else {
    finTransaccion=true;
    alert(`El valor total es ${precioTotal}, compro en total ${contador} zapatos
        \nrunning: ${numberRunning}\nclasico: ${numberClasico}\nbasketball:${numberBasketball}`)
}