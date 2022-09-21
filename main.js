const Empleado = require("./Empleado");

const main = (function () {
  const Angie = Object.create(Empleado);
  Angie.nombre = "Angie";
  Angie.apellido = "Caceres";
  Angie.dni = 123456;
  console.log(Angie.obtenerNombreCompleto());
})();
