// algoritmo para calcular el presupeusto de una computadora



let precioMonitor, precioTeclado, precioMouse, precioGabinete, precioTotal;

do {
  precioGabinete = Number(prompt("Introduzca el precio de su gabinete"));
} while (precioGabinete <= 0 || isNaN(precioGabinete));

do {
  precioMonitor = Number(prompt("Introduzca el precio de su monitor"));
} while (precioMonitor <= 0 || isNaN(precioMonitor));

do {
  precioTeclado = Number(prompt("Introduzca el precio de su teclado"));
} while (precioTeclado <= 0 || isNaN(precioTeclado));

do {
  precioMouse = Number(prompt("Introduzca el precio de su mouse"));
} while (precioMouse <= 0 || isNaN(precioMouse));

precioTotal = precioGabinete + precioMonitor + precioMouse + precioTeclado;

if (precioTotal > 150000) {
  calculoDescuentos();
}

alert(`El costo total de su computadora es: ${precioTotal}`);
alert(`Gracias por comprar con 'AWSD Tecnologia' `);



function calculoDescuentos() {

  let descuento;
  alert(`Debido al costo de la compra tendras un 10% de descuento`);
  descuento = precioTotal * 0.1;
  precioTotal = precioTotal - descuento;
  alert(`Tu descuento fue de ${descuento}`);

}