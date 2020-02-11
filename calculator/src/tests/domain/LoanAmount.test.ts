import {
  createLoanAmount,
  maxLoanAmount, maxLoanAmountMessage,
  minLoanAmount,
  minLoanAmountMessage,
} from '../../main/domain/valueObjects/LoanAmount';

describe('LoanAmount', () => {
  it('should create a loan amount', () => {
    const testAmount = 2000;
    const loanAmount = createLoanAmount(testAmount);

    expect(loanAmount.value).toEqual(testAmount);
  });

  it(`should throw if the loan amount is less than ${minLoanAmount}`, () => {
    expect(() => createLoanAmount(999)).toThrow(minLoanAmountMessage);
  });

  it(`should throw if the loan amount is greater than ${maxLoanAmount}`, () => {
    expect(() => createLoanAmount(10001)).toThrow(maxLoanAmountMessage);
  });
});
