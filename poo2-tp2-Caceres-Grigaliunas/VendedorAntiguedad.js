const Vendedor = require("./Vendedor");
const Checker = require("./Checker");

function VendedorAntiguedad(nombre, apellido, dni, comision, sueldo) {
  if (Checker.comisionValida(comision) && Checker.sueldoValido(sueldo)) {
    this.sueldo = sueldo;
    Vendedor.call(this, nombre, apellido, dni, comision);
  }

  this.obtenerMonto = () => {
    return this.calculartotalVendido() * this.comision + this.sueldo;
  };
}

module.exports = VendedorAntiguedad;
