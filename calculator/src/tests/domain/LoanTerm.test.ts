import { createLoanTerm, invalidLoanTermMessage } from '../../main/domain/valueObjects/LoanTerm';

describe('LoanTerm', () => {
  it('should create a valid loan term', () => {
    const testValues = {
      loanTerm1: 1,
      loanTerm15: 3,
      loanTerm30: 5,
    };

    const loanTerm1 = createLoanTerm(testValues.loanTerm1);
    const loadTerm15 = createLoanTerm(testValues.loanTerm15);
    const loadTerm30 = createLoanTerm(testValues.loanTerm30);

    expect(loanTerm1.value).toEqual(testValues.loanTerm1);
    expect(loadTerm15.value).toEqual(testValues.loanTerm15);
    expect(loadTerm30.value).toEqual(testValues.loanTerm30);
  });

  it('should throw if the loan term value is invalid', () => {
    expect(() => createLoanTerm(0)).toThrow(invalidLoanTermMessage);

    expect(() => createLoanTerm(6)).toThrow(invalidLoanTermMessage);

    expect(() => createLoanTerm(1.5)).toThrow(invalidLoanTermMessage);
  });
});
