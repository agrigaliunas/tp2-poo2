const Vendedor = require("./Vendedor");
const Checker = require("./Checker");

function VendedorAntiguedad(nombre, apellido, dni, comision, sueldo) {
  if (Checker.comisionValida(comision) && Checker.sueldoValido(sueldo)) {
    // para calcular el sueldo final, hay que sumar cada monto de cada factura multiplicado por su respectiva comision
    this.sueldo = sueldo;
    Vendedor.call(this, nombre, apellido, dni, comision);
    
  }

  this.obtenerMonto = () => {
    /*this.total=0;
    this.facturas.forEach(factura => {
        this.total+=factura.montoTotal;
    });
    console.log(this.total);*/
    return this.calculartotalVendido()*this.comision + this.sueldo;
  };
}

module.exports = VendedorAntiguedad;
