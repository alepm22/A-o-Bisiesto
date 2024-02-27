import { esBisiesto } from "./AñoBisiesto.js";

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("bisiesto-form");
  const resultadoDiv = document.getElementById("resultado-bisiesto");

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const anioInput = document.getElementById("anio");
    const anio = parseInt(anioInput.value);

    if (isNaN(anio)) {
      resultadoDiv.innerHTML = "Ingrese un año válido.";
      return;
    }

    const esBisiestoResultado = esBisiesto(anio);

    resultadoDiv.innerHTML = esBisiestoResultado
      ? `El año ${anio} es bisiesto.`
      : `El año ${anio} no es bisiesto.`;
  });
});
