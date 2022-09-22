const Checker = (function () {
  return {
    precioUnidadValido: function (precioUnidad) {
      if (precioUnidad < 0) {
        throw new Error("El precio es negativo.");
      } else {
        return true;
      }
    },
    sueldoValido: function (sueldo) {
      if (sueldo <= 0) {
        throw new Error("El sueldo es negativo o igual a 0.");
      } else {
        return true;
      }
    },
    horasValidas: function (horasTrabajadas, valorHora) {
      if (horasTrabajadas <= 0 || valorHora <= 0) {
        throw new Error(
          "Las horas trabajadas o el valor de la hora son negativas o igual a 0."
        );
      } else {
        return true;
      }
    },
    comisionValida: function (valor) {
      if (valor <= 0 || valor > 1) {
        throw new Error(
          "El valor no puede ser negativo o no puede superar el 100% (1)"
        );
      } else {
        return true;
      }
    },
  };
})();

module.exports = Checker;
