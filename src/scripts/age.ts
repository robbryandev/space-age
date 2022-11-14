export default class Age {
  yearLength: number;
  earthAge: number;
  constructor(yearLength = 365, earthAge = 1) {
    this.yearLength = yearLength;
    this.earthAge = earthAge;
  }

  getAge() {
    return 0;
  }
}