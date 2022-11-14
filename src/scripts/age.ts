export default class Age {
  yearLength: number;
  earthAge: number;
  constructor(yearLength = 365, earthAge = 1) {
    this.yearLength = yearLength;
    this.earthAge = earthAge;
  }

  getAge() {
    const earthYear = 365;
    const yearDec = this.yearLength / earthYear;
    return Math.floor(this.earthAge / yearDec);
  }

  mercuryAge() {
    return 0;
  }
}