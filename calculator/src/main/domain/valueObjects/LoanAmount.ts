export class LoanAmount {
  static readonly min = 1000;
  static readonly max = 10000;
  static readonly minErrorMessage = `The loan amount needs to be greater or equal to ${LoanAmount.min}`;
  static readonly maxErrorMessage = `The loan amount needs to be smaller or equal to ${LoanAmount.max}`;

  static create(value: number): LoanAmount {
    return new LoanAmount(value);
  }

  private static validate(value: number) {
    if (value < LoanAmount.min) {
      throw new Error(LoanAmount.minErrorMessage);
    }

    if (value > LoanAmount.max) {
      throw new Error(LoanAmount.maxErrorMessage);
    }
  }

  readonly value: number;

  private constructor(value: number) {
    LoanAmount.validate(value);

    this.value = value;
  }
}
