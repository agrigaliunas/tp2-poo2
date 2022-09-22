const Vendedor = require("./Vendedor");
const Checker = require("./Checker");

function VendedorAntiguedad(nombre, apellido, dni, comision, sueldo) {
  if (Checker.comisionValida(comision) && Checker.sueldoValido(sueldo)) {
    // para calcular el sueldo final, hay que sumar cada monto de cada factura multiplicado por su respectiva comision
    this.sueldo = sueldo;
    Vendedor.call(this, nombre, apellido, dni, comision);
  }

  this.obtenerMonto = () => {
    // idem linea 8
  };
}

module.exports = VendedorAntiguedad;
