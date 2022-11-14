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

describe("Age getAge() method", () => {
  test("Should return a default age of 1", () => {
    let fiveAge = new Age();
    expect(fiveAge.getAge()).toEqual(1);
  });

  test("Should return an age of 5", () => {
    const spaceYear = 73;
    const testAge = 1;
    let fiveAge = new Age(spaceYear, testAge);
    expect(fiveAge.getAge()).toEqual(5);
  });

  test("Should return an age of 10", () => {
    const spaceYear = 365 * 2;
    const testAge = 20;
    let tenAge = new Age(spaceYear, testAge);
    expect(tenAge.getAge()).toEqual(10);
  });
});

describe("Age mercuryAge() method", () => {
  test("Should return an age of 41", () => {
    const spaceYear = 365;
    const testAge = 10;
    const mercAge = new Age(spaceYear, testAge);
    expect(mercAge.mercuryAge()).toEqual(41);
  });
});

describe("Age venusAge() method", () => {
  test("Should return an age of 16", () => {
    const spaceYear = 365;
    const testAge = 10;
    const venAge = new Age(spaceYear, testAge);
    expect(venAge.venusAge()).toEqual(16);
  });
});

describe("Age marsAge() method", () => {
  test("Should return an age of 16", () => {
    const spaceYear = 365;
    const testAge = 10;
    const marAge = new Age(spaceYear, testAge);
    expect(marAge.marsAge()).toEqual(5);
  });
});