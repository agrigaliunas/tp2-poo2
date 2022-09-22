var Checker = (function () {
  return {
    sueldoPositivo: function (sueldo) {
      if (sueldo <= 0) {
        throw new Error("El sueldo es negativo o igual a 0.");
      } else {
        return true;
      }
    },

    horasPositivas: function (horasTrabajadas, valorHora) {
      if (horasTrabajadas <= 0 || valorHora <= 0) {
        throw new Error("Las horas trabajadas o el valor de la hora son negativas o igual a 0.");
      } else {
        return true;
      }
    },
  };
})();

module.exports = Checker;
