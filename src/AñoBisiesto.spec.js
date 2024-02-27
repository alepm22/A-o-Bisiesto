import { esBisiesto } from "./AñoBisiesto";

describe("AñoBisiesto", () => {
  it("Debería retornar true para el año 2000", () => {
    expect(esBisiesto(2000)).toEqual(true);
  });

  it("Debería retornar true para el año 2024", () => {
    expect(esBisiesto(2024)).toEqual(true);
  });

  it("Debería retornar false para el año 2100", () => {
    expect(esBisiesto(2100)).toEqual(false);
  });

  it("Debería retornar false para el año 2023", () => {
    expect(esBisiesto(2023)).toEqual(false);
  });
});
