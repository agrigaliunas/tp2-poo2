const Empleado = require("./Empleado");
const Checker = require("./Checker");
const Factura = require("./Factura");

function Vendedor(nombre, apellido, dni, comision) {
  if (Checker.comisionValida(comision)) {
    this.comision = comision;
    Empleado.call(this, nombre, apellido, dni);
  }
  this.facturas = [];

  this.vender = (factura) => {
    this.facturas.push(factura);
  };

  this.calculartotalVendido = () => {
    let total = 0;
    this.facturas.forEach((factura) => {
      total += factura.montoTotal;
    });
    return total;
  };

  this.obtenerMonto = () => {
    return this.calculartotalVendido() * this.comision;
  };

  this.imprimirFacturas = function () {
    this.facturas.forEach((factura) => {
      console.log(
        "\n==========\nFactura id:" +
          factura.id +
          "\nVendedor: " +
          this.nombre +
          "\nMonto total: $" +
          factura.montoTotal +
          "\n==========\n"
      );
    });
  };
}

module.exports = Vendedor;
