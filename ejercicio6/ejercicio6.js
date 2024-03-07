// Definir los precios de los elementos del menú
const hamburguesaSimplePrice = 25000;
const hamburguesaDoblePrice = 30000;
const pizzaFamiliarPrice = 85000;
const pizzaMedianaPrice = 60000;
const fideosConPolloPrice = 18000;
const arrozTresDeliciasPrice = 20000;

function placeOrder(restaurant, item1, item2) {
  if (item1 === undefined || item2 === undefined) {
    console.log('Debe seleccionar al menos dos elementos del menú.');
    return;
  }

  const subtotal = item1 + item2;
  const total = subtotal + 5000;

  if (subtotal < 23000) {
    console.log('El pedido no cumple con el mínimo de compra.');
    return;
  }

  const deliveryTime = Math.floor(Math.random() * (60 - 45 + 1) + 45);

  console.log('Resumen del pedido:');
  console.log('Restaurante: ' + restaurant);
  console.log(`Items: $${item1}, $${item2}`);
  console.log(`Subtotal: $${subtotal}`);
  console.log('Costo de envío: $5000');
  console.log(`Total a pagar: $${total}`);
  console.log(`Tiempo de entrega estimado: ${deliveryTime} minutos`);
}

const selectedRestaurant = 'Hamburguesas';
const selectedItems = [
  hamburguesaSimplePrice,
  hamburguesaDoblePrice
];

placeOrder(selectedRestaurant, ...selectedItems);
