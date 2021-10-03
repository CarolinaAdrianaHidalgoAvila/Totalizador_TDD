import calcularTotal from "./App.js";
describe("Totalizador ", () => {
  it("deberia calcular para un cantidad", () => {
    expect(calcularTotal(2, 1, "")).toEqual(2);
  });
  it("deberia calcular para un cantidad", () => {
    expect(calcularTotal(2, 2, "")).toEqual(4);
  });
  it("deberia calcular para un estado por defecto", () => {
    expect(calcularTotal(2, 2, "CA")).toEqual(4.33);
  });
  it("deberia calcular para un estado CA", () => {
    expect(calcularTotal(3, 2, "CA")).toEqual(6.495);
  });
  it("deberia calcular para un estado UT", () => {
    expect(calcularTotal(3, 2, "UT")).toEqual(6.399);
  });
  it("deberia calcular para un estado NV", () => {
    expect(calcularTotal(3, 2, "NV")).toEqual(6.48);
  });
  it("deberia calcular para un estado TX", () => {
    expect(calcularTotal(3, 2, "TX")).toEqual(6.375);
  });
  it("deberia calcular para un estado AL", () => {
    expect(calcularTotal(3, 2, "AL")).toEqual(6.24);
  });
  it("deberia mostrar precioTotal con impuestos y descuento por defecto para 30000", () => {
    expect(calcularTotal(30000,1,"UT")).toEqual(27195.75);

  });
  it("deberia mostrar precioTotal con impuestos y descuento para 3000", () => {
    expect(calcularTotal(3000,1,"AL")).toEqual(2964);

  });
  it("deberia mostrar precioTotal con impuestos y descuento para 10000", () => {
    expect(calcularTotal(10000,1,"TX")).toEqual(9562.5);

  });
  it("deberia mostrar precioTotal con impuestos y descuento para 7000", () => {
    expect(calcularTotal(7000,1,"NV")).toEqual(7030.8);

  });
  it("deberia mostrar precioTotal con impuestos y descuento para 1000", () => {
    expect(calcularTotal(1000,1,"CA")).toEqual(1050.025);

  });
  
});


