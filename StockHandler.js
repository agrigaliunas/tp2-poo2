const StockHandler = (function () {
  return {
    agregarStock: function (producto, cantidad) {
      if (cantidad > 0) {
        producto.stock += cantidad;
      } else {
        throw new Error("La cantidad a agregar de stock debe ser positiva");
      }
    },
    quitarStock: function (producto, cantidad) {
      if (cantidad > 0) {
        producto.stock -= cantidad;
      } else {
        throw new Error("La cantidad a quitar de stock debe ser positiva");
      }
    },
    checkStock: function (producto) {
      return producto.stock > 0 ? true : false;
    },
  };
})();

module.exports = StockHandler;
