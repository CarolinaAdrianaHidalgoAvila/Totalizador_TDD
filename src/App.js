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

function calcularTotal(cantidad, precio, estado) {
  let subTotal = cantidad * precio;
  let impuesto = impuestoEstado(estado);
  subTotal = subTotal + subTotal * impuesto;
  return subTotal;
}
export default calcularTotal;