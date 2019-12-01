import { LoanAmount } from '../../main/domain/valueObjects/LoanAmount';

describe('LoanAmount', () => {
  it('should create a loan amount', () => {
    const testAmount = 2000;
    const loanAmount = new LoanAmount(testAmount);

    expect(loanAmount.value).toEqual(testAmount);
  });

  it(`should throw if the loan amount is less than ${LoanAmount.min}`, () => {
    expect(() => {
      return new LoanAmount(999);
    }).toThrow(LoanAmount.minErrorMessage);
  });

  it(`should throw if the loan amount is greater than ${LoanAmount.max}`, () => {
    expect(() => {
      return new LoanAmount(10001);
    }).toThrow(LoanAmount.maxErrorMessage);
  });
});
