const Empleado = require("./Empleado");
const Checker = require("./Checker");

function EmpleadoAdministrativo(nombre, apellido, dni, sueldo) {
  if (Checker.sueldoValido(sueldo)) {
    this.sueldo = sueldo;
    Empleado.call(this, nombre, apellido, dni);
  }

  this.obtenerMonto = () => {
    return this.sueldo;
  };
}

EmpleadoAdministrativo.prototype = Object.create(Empleado.prototype);

module.exports = EmpleadoAdministrativo;
