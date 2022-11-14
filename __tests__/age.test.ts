import Age from "../src/scripts/age";

describe("Age class", () => {
  let testAge: Age;

  beforeEach(() => {
    testAge = new Age();
  });

  test("Should return default earth year length", () => {
    expect(testAge.yearLength).toEqual(365);
  });

  test("Should return default earth age of 1", () => {
    expect(testAge.earthAge).toEqual(1);
  });
});