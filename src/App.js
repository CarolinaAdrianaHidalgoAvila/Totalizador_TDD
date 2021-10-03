function impuestoEstado(estado) {
  let impuestos = { 
    "UT":0.0665,
    "NV":0.08,
    "TX":0.0625,
    "AL":0.04,
    "CA":0.0825,
    "": 0 };
  return impuestos[estado];
}
var discount_groups = {
  1000:0.03,
  3000:0.05,
  7000:0.07,
  10000:0.10,
  30000:0.15
}
function calcular_descuento(total){
  let descuento = 0;
  switch (true) {
      case (total >= 30000 ):
          descuento = total * discount_groups[30000]
          break;
      case (total >= 10000 ):
        descuento = total * discount_groups[10000]
          break;
      case (total >= 7000 ):
          descuento = total * discount_groups[7000]
          break;
      case (total >= 3000 ):
          descuento = total * discount_groups[3000]
          break;
      case (total >= 1000 ):
          descuento = total * discount_groups[1000]
          break;
      default:
          descuento = 0
          break;
  }
  return descuento
}

function calcularTotal(cantidad, precio, estado){
  let subtotal =  cantidad*precio;
  let impuesto = impuestoEstado(estado);
  subtotal = subtotal +subtotal *impuesto;
  let descuento = calcular_descuento(subtotal);
  return subtotal - descuento;
}
export default calcularTotal;