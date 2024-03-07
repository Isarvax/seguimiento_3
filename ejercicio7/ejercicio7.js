
const precios = {
  General: 50000,
  Preferencial: 150000,
  VIP: 300000
};

const capacidad = {
  General: 100,
  Preferencial: 50,
  VIP: 20
};

function calcularTotal(cantidadBoletas, localidad) {
  if (cantidadBoletas > capacidad[localidad]) {
    console.log(`Lo sentimos, no hay suficientes boletas disponibles para la localidad ${localidad}`);
    return;
  }

  const subtotal = cantidadBoletas * precios[localidad];
  const impuestos = subtotal * 0.1;
  const cargoServicio = cantidadBoletas * 5000;

  const total = subtotal + impuestos + cargoServicio;

  console.log('Desglose de cobros:');
  console.log(`Subtotal (${cantidadBoletas} boletas ${localidad}): $${subtotal}`);
  console.log(`Impuestos (10%): $${impuestos}`);
  console.log(`Cargo por servicio: $${cargoServicio}`);
  console.log(`Total a pagar: $${total}`);
}


calcularTotal(2, 'General');
