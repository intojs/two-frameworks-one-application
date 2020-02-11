import { InterestRate } from '../../main/domain/valueObjects/InterestRate';
import { LoanTerm } from '../../main/domain/valueObjects/LoanTerm';

describe('InterestRate', () => {
  describe('when the loan term is less than two years', () => {
    describe('when there is no life insurance opt-in', () => {
      it('should be equal to 20% per annum', () => {
        const loanTerm = LoanTerm.create(1);

        const interestRate = InterestRate.create(loanTerm, false);

        expect(interestRate.value).toEqual(20);
      });
    });

    describe('when there is life insurance opt-in', () => {
      it('should be equal to 17% per annum', () => {
        const loanTerm = LoanTerm.create(1);

        const interestRate = InterestRate.create(loanTerm, true);

        expect(interestRate.value).toEqual(17);
      });
    });
  });

  describe('when the loan term is greater than two years', () => {
    describe('when there is no life insurance opt-in', () => {
      it('should be equal to 15% per annum', () => {
        const loanTerm = LoanTerm.create(3);

        const interestRate = InterestRate.create(loanTerm, false);

        expect(interestRate.value).toEqual(15);
      });
    });

    describe('when there is life insurance opt-in', () => {
      it('should be equal to 12% per annum', () => {
        const loanTerm = LoanTerm.create(3);

        const interestRate = InterestRate.create(loanTerm, true);

        expect(interestRate.value).toEqual(12);
      });
    });
  });
});
