import { LoanTerm } from '../../main/domain/valueObjects/LoanTerm';

describe('LoanTerm', () => {
  it('should create a valid loan term', () => {
    const testValues = {
      loanTerm1: 1,
      loanTerm15: 3,
      loanTerm30: 5,
    };

    const loanTerm1 = LoanTerm.create(testValues.loanTerm1);
    const loadTerm15 = LoanTerm.create(testValues.loanTerm15);
    const loadTerm30 = LoanTerm.create(testValues.loanTerm30);

    expect(loanTerm1.value).toEqual(testValues.loanTerm1);
    expect(loadTerm15.value).toEqual(testValues.loanTerm15);
    expect(loadTerm30.value).toEqual(testValues.loanTerm30);
  });

  it('should throw if the loan term value is invalid', () => {
    expect(() => LoanTerm.create(0)).toThrow(LoanTerm.errorMessage);

    expect(() => LoanTerm.create(6)).toThrow(LoanTerm.errorMessage);

    expect(() => LoanTerm.create(1.5)).toThrow(LoanTerm.errorMessage);
  });
});
