const EmpleadoFactory = require("./EmpleadoFactory");
const Factura = require("./Factura");
const Producto = require ("./Producto");
const StockHandler = require ("./StockHandler");

const main = (function () {
  const Angie = EmpleadoFactory.crearEmpleadoAdministrativo({
    nombre: "Angela",
    apellido: "Caceres",
    dni: 123456,
    sueldo: 1200,
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
  
  var Teclado = new Producto("Teclado",4000);
  var Mouse = new Producto("Mouse",3700);
  var Auricular= new Producto("Auriculares",2600);
  var Cable = new Producto("Cable",1200);

  StockHandler.agregarStock(Teclado,200);
  StockHandler.agregarStock(Mouse,120);
  StockHandler.agregarStock(Auricular,420);
  StockHandler.agregarStock(Cable,400);

  const facturaTomas = new Factura(Tomas);
  facturaTomas.agregarProducto(Teclado,6); // ver cantidades negativas // eliminar de stock
  facturaTomas.agregarProducto(Mouse,14); // ver cantidades negativas
  facturaTomas.agregarProducto(Auricular,30);
  facturaTomas.agregarProducto(Cable,50); // ver cantidades negativas

  console.log(facturaTomas); // se ve el stock al imprimir :-/

})();
