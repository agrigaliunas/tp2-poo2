function Empleado(nombre, apellido, dni) {
  this.nombre = nombre;
  this.apellido = apellido;
  this.dni = dni;

  this.obtenerNombreCompleto = () => {
    return this.nombre + " " + this.apellido;
  };

  this.obtenerMonto = () => {
    throw new Error("El método debe invocarse desde una subclase");
  };
}

module.exports = Empleado;
