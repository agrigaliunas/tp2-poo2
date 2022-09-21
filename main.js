const Empleado = require("./Empleado");

const main = (function () {
  const Angie = new Empleado("Angela","Caceres",123456);
  console.log(Angie.obtenerNombreCompleto());
})();
