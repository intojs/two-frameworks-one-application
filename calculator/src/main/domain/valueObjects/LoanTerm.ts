export class LoanTerm {
  static readonly min = 1;
  static readonly max = 5;
  static readonly errorMessage = `
    The loan term must be a whole number
    greater or equal to ${LoanTerm.min}
    and
    smaller or equal to ${LoanTerm.max}
  `;

  static create(value: number): LoanTerm {
    return new LoanTerm(value);
  }

  private static isWhole(value: number): boolean {
    return value % 1 === 0;
  }

  private static validate(value: number) {
    if (!LoanTerm.isWhole(value) || value < LoanTerm.min || value > LoanTerm.max) {
      throw Error(LoanTerm.errorMessage);
    }
  }

  readonly value: number;

  private constructor(value: number) {
    LoanTerm.validate(value);

    this.value = value;
  }

  convertToMonths(): number {
    return this.value * 12;
  }
}
