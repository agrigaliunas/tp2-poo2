const Empleado = require("./Empleado");
const Checker = require("./Checker");

function Vendedor(nombre, apellido, dni, comision) {
  if (Checker.comisionValida(comision)) {
    this.comision = comision;
    Empleado.call(this, nombre, apellido, dni);
  }


  this.obtenerMonto = () => {
    return this.comision;
  };
}

module.exports = Vendedor;
