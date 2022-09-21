const Empleado = (function () {
  var nombre;
  var apellido;
  var dni;

  function oNombreCompleto() {
    return nombre + " " + apellido;
  }

  function oMonto() {
    throw new Error("El método debe invocarse desde una subclase");
  }

  return {
    obtenerNombreCompleto: oNombreCompleto,
    obtenerMonto: oMonto,
  };
})();

module.exports = Empleado;
