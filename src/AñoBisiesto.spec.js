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

  it("Debería retornar true para el año 2008", () => {
    expect(esBisiesto(2008)).toEqual(true);
  });

  it("Debería retornar true para el año 2012", () => {
    expect(esBisiesto(2012)).toEqual(true);
  });

  it("Debería retornar true para el año 2016", () => {
    expect(esBisiesto(2016)).toEqual(true);
  });
  it("Debería retornar false para el año 2017", () => {
    expect(esBisiesto(2017)).toEqual(false);
  });

  it("Debería retornar false para el año 2018", () => {
    expect(esBisiesto(2018)).toEqual(false);
  });

  it("Debería retornar false para el año 2019", () => {
    expect(esBisiesto(2019)).toEqual(false);
  });
});
