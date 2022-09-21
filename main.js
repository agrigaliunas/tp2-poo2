const EmpleadoAdministrativo = require("./EmpleadoAdministrativo");

const main = (function () {
    const Angie = new EmpleadoAdministrativo("Angela","Caceres",123456,1200);
    console.log(Angie.obtenerMonto());
})();
