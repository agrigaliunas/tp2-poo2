var Checker = (function () {
  return {
    sueldoPositivo: function (sueldo) {
      if (sueldo <= 0) {
        throw new Error("El sueldo es negativo o igual a 0.");
      } else {
        return true;
      }
    },

    horasPositivas: function (horas) {
      if (horas <= 0) {
        throw new Error("Las horas son negativas o igual a 0.");
      } else {
        return true;
      }
    },
  };
})();

module.exports = Checker;
