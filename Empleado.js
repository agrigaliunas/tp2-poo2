function Empleado(nombreEmpleado, apellidoEmpleado, dniEmpleado) {
  var nombre = nombreEmpleado;
  var apellido = apellidoEmpleado;
  var dni = dniEmpleado;

  this.obtenerNombreCompleto = () => {
    nombre + " " + apellido;
  };

  this.obtenerMonto = () => {
    throw new Error("El método debe invocarse desde una subclase");
  };
}

module.exports = Empleado;
