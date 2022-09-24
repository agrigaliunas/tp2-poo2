const StockHandler = require("./StockHandler");
var id = 1;

const Factura = function (vendedor) {
  var productos = [];
  this.id = id;
  this.vendedor = vendedor;
  this.vendedor.vender(this);
  id++;
  this.montoTotal = 0;

  this.agregarProducto = function (producto, cantidad) {
    if (StockHandler.checkStock(producto)) {
      producto.cantidad = cantidad;
      StockHandler.quitarStock(producto, cantidad);
      productos.push(producto);
      this.productos = productos;
      this.montoTotal += producto.precioUnidad * producto.cantidad;
    } else {
      throw new Error("No hay stock del producto" + producto.nombre);
    }
  };
  //this.vendedor.calculartotalVendido(this.montoTotal);



};

module.exports = Factura;
