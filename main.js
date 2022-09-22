const EmpleadoAdministrativo = require("./EmpleadoAdministrativo");
const EmpleadoPorHora = require("./EmpleadoPorHora");

const main = (function () {
    const Angie = new EmpleadoAdministrativo("Angela","Caceres",123456,1400);
    console.log(Angie.obtenerMonto());
    const Agustin = new EmpleadoPorHora("Agustin","Grigaliunas",786472,200,6);
    console.log(Agustin.obtenerMonto());
})();
