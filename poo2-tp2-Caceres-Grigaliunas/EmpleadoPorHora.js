const Empleado = require("./Empleado");
const Checker = require("./Checker");

function EmpleadoPorHora(nombre, apellido, dni, valorHora, horasTrabajadas) {
  if (Checker.horasValidas(horasTrabajadas, valorHora)) {
    this.valorHora = valorHora;
    this.horasTrabajadas = horasTrabajadas;
    Empleado.call(this, nombre, apellido, dni);
  }

  this.obtenerMonto = () => {
    return this.valorHora * this.horasTrabajadas;
  };
}

EmpleadoPorHora.prototype = Object.create(Empleado.prototype);

module.exports = EmpleadoPorHora;
