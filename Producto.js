const Checker = require("./Checker");

const Producto = function (nombre, precioUnidad) {
  if (Checker.precioUnidadValido(precioUnidad)) {
    this.precioUnidad = precioUnidad;
  }

  this.nombre = nombre;
  this.cantidad = 0;
  this.stock = 0;

  this.obtenerPrecioUnidad = () => {
    return this.precioUnidad;
  };
};

module.exports = Producto;
