const EmpleadoFactory = require("./EmpleadoFactory");
const Factura = require("./Factura");
const Producto = require("./Producto");
const StockHandler = require("./StockHandler");

const main = (function () {
  const Angie = EmpleadoFactory.crearEmpleadoAdministrativo({
    nombre: "Angela",
    apellido: "Caceres",
    dni: 123456,
    sueldo: 12000,
  });

  const Agustin = EmpleadoFactory.crearEmpleadoPorHora({
    nombre: "Agustin",
    apellido: "Grigaliunas",
    dni: 654321,
    valorHora: 120,
    horasTrabajadas: 10,
  });

  const Tomas = EmpleadoFactory.crearVendedor({
    nombre: "Tomas",
    apellido: "Ferrari",
    dni: 124671,
    comision: 0.1,
  });

  const AgusD = EmpleadoFactory.crearVendedorAntiguedad({
    nombre: "agus",
    apellido: "D",
    dni: 124671,
    comision: 0.1,
    sueldo: 200,
  });

  var Teclado = new Producto("Teclado", 4000);
  var Mouse = new Producto("Mouse", 3700);
  var Auricular = new Producto("Auriculares", 2600);
  var Cable = new Producto("Cable", 1200);

  StockHandler.agregarStock(Teclado, 200);
  StockHandler.agregarStock(Mouse, 120);
  StockHandler.agregarStock(Auricular, 420);
  StockHandler.agregarStock(Cable, 400);

  const facturaTomas = new Factura(Tomas);
  facturaTomas.agregarProducto(Teclado, 6);
  facturaTomas.agregarProducto(Mouse, 14);
  facturaTomas.agregarProducto(Auricular, 30);
  facturaTomas.agregarProducto(Cable, 50);
  const factura2Tomas = new Factura(Tomas);
  factura2Tomas.agregarProducto(Teclado, 2);
  factura2Tomas.agregarProducto(Mouse, 1);

  Tomas.imprimirFacturas();

  const factura2AgusD = new Factura(AgusD);
  factura2AgusD.agregarProducto(Teclado, 1);
  factura2AgusD.agregarProducto(Mouse, 1);

  AgusD.imprimirFacturas();

  console.log("Monto a pagar a Angie: $" + Angie.obtenerMonto());
  console.log("Monto a pagar a Agustin G: $" + Agustin.obtenerMonto());
  console.log("Monto a pagar a Tomas: $" + Tomas.obtenerMonto());
  console.log("Monto a pagar a Agustin D: $" + AgusD.obtenerMonto());
})();
