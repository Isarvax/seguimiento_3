let precioTotal = 0;
const mangoLargo = 2000; 
const gancho = 500
let modeloEscoba= prompt(`Digite el modelo de escoba:\n1. Escoba dura\n2. Escoba suave\n3. Cepillo`)
let material= prompt(`Seleccione el tipo del material: \n1. Cerdas sinteticas\n2. Cerdas naturales`)
switch (modeloEscoba) {
    case '1': 
        precioTotal+=(material=='1') 
        ? 8000  
        : 10000
        break;
    case '2':
        precioTotal+=(material=='1')
            ? 15000
            : 20000        
        break;

    case '3':
        precioTotal+=(material=='1')
            ? 12000
            : 15000        
        break;
    default:
        alert(`El modelo de escoba no es valido`)
        break;
}
if(prompt(`Desea opciones adicionales de fabricacion, en este caso mango largo o gancho en punta?\nyes\nno`)=='yes'){
    if(prompt(`Desea tener mango largo\nyes\nno`)=='yes'){
        precioTotal+=mangoLargo
    }else if(prompt(`Desea tener gancho en punta\nyes\nno`)=='yes'){
        precioTotal+=gancho
    }

}
let cantidad= parseInt(prompt(`Que cantidad de escobas desea`))
cantidad=((cantidad<=0)?1:cantidad)
alert(`El precio total es: ${precioTotal*cantidad}\nCompro una cantidad de: ${cantidad}`)