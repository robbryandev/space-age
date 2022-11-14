export default class Age {
  yearLength: number;
  earthAge: number;
  constructor(yearLength = 365, earthAge = 1) {
    this.yearLength = yearLength;
    this.earthAge = earthAge;
  }

  getAge(yearVar: number = this.yearLength) {
    const earthYear = 365;
    const yearDec = yearVar / earthYear;
    return Math.floor(this.earthAge / yearDec);
  }

  mercuryAge() {
    const earthYear = 365;
    const mercYear = earthYear * 0.24;
    return this.getAge(mercYear);
  }
}