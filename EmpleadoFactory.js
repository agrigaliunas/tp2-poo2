const EmpleadoAdministrativo = require("./EmpleadoAdministrativo");
const EmpleadoPorHora = require("./EmpleadoPorHora");
const Vendedor = require("./Vendedor");
const VendedorAntiguedad = require("./VendedorAntiguedad");

const EmpleadoFactory = (function () {
  return {
    crearEmpleadoAdministrativo: function (props) {
      return new EmpleadoAdministrativo(
        props.nombre,
        props.apellido,
        props.dni,
        props.sueldo
      );
    },
    crearEmpleadoPorHora: function (props) {
      return new EmpleadoPorHora(
        props.nombre,
        props.apellido,
        props.dni,
        props.valorHora,
        props.horasTrabajadas
      );
    },
    crearVendedor: function (props) {
      return new Vendedor(
        props.nombre,
        props.apellido,
        props.dni,
        props.comision
      );
    },
    crearVendedorAntiguedad: function (props) {
      return new VendedorAntiguedad(
        props.nombre,
        props.apellido,
        props.dni,
        props.comision,
        props.sueldo
      );
    },
  };
})();

module.exports = EmpleadoFactory;
