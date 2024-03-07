// Definir las carreras disponibles con sus pilotos y cuotas
const carrera1 = { nombre: 'Carrera 1', pilotos: ['Piloto A (1.5)', 'Piloto B (2.3)', 'Piloto C(1.8)'] };
const carrera2 = { nombre: 'Carrera 2', pilotos: ['Piloto X (1.7)', 'Piloto Y (2.0)', 'Piloto Z (2.5)'] };

// Función para realizar una apuesta
function realizarApuesta(carrera, tipoApuesta, monto) {
  // Verificar si la carrera existe
  if (!carrera) {
    console.log('Carrera no encontrada.');
    return;
  }

  // Verificar el monto mínimo y máximo por apuesta
  if (monto < 10000) {
    console.log('El monto mínimo por apuesta es $10000.');
    return;
  }
  if (monto > 1000000) {
    console.log('El monto máximo por evento es $1000000.');
    return;
  }

  // Simular el resultado de la carrera
  const resultado = Math.floor(Math.random() * carrera.pilotos.length);
  const pilotoGanador = carrera.pilotos[resultado];

  // Mostrar el resultado de la carrera
  console.log(`El piloto ganador de la ${carrera.nombre} es: ${pilotoGanador}`);

  // Calcular ganancias según el tipo de apuesta
  let ganancias = 0;
  if (tipoApuesta === 'Ganador') {
    const cuota = parseFloat(pilotoGanador.split('(')[1].split(')')[0]);
    ganancias = monto * cuota;
  } else if (tipoApuesta === 'Posiciones exactas') {
    // Asumimos una cuota fija para las posiciones exactas
    ganancias = monto * 2; // Supongamos que es un pago doble por acertar posiciones exactas
  }

  // Mostrar ganancias
  console.log(`Ganancias: $${ganancias}`);
}

// Ejemplo de realización de una apuesta
realizarApuesta(carrera1, 'Ganador', 20000); // Realizar una apuesta en la Carrera 1, tipo Ganador, con $20000
