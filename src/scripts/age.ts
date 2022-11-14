export default class Age {
  yearLength: number;
  earthAge: number;
  readonly earthYear = 365;
  constructor(yearLength = 365, earthAge = 1) {
    this.yearLength = yearLength;
    this.earthAge = earthAge;
  }

  getAge(yearVar: number = this.yearLength) {
    const yearDec = yearVar / this.earthYear;
    return Math.floor(this.earthAge / yearDec);
  }

  mercuryAge() {
    const mercYear = this.earthYear * 0.24;
    return this.getAge(mercYear);
  }

  venusAge() {
    const venYear = this.earthYear * 0.62;
    return this.getAge(venYear);
  }

  marsAge() {
    return 0;
  }
}