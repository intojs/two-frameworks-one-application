import { createEmailAddress, EmailAddress } from '../valueObjects/EmailAddress';
import { createInterestRate, InterestRate } from '../valueObjects/InterestRate';
import { createLoanAmount, LoanAmount } from '../valueObjects/LoanAmount';
import { createLoanTerm, LoanTerm } from '../valueObjects/LoanTerm';
import { createMonthlyPayment, MonthlyPayment } from '../valueObjects/MonthlyPayment';

interface Payload {
  readonly emailAddress: string;
  readonly loanAmount: number;
  readonly loanTerm: number;
  readonly lifeInsuranceOptIn: boolean;
}

interface LoanCalculation {
  readonly emailAddress: EmailAddress;
  readonly loanAmount: LoanAmount;
  readonly loanTerm: LoanTerm;
  readonly lifeInsuranceOptIn: boolean;
  readonly interestRate: InterestRate;
  readonly monthlyPayment: MonthlyPayment;
}

const createLoanCalculation = (payload: Payload): LoanCalculation => {
  const loanAmount = createLoanAmount(payload.loanAmount);

  const loanTerm = createLoanTerm(payload.loanTerm);

  const lifeInsuranceOptIn = payload.lifeInsuranceOptIn;

  const interestRate = createInterestRate(loanTerm, payload.lifeInsuranceOptIn);

  const monthlyPayment = createMonthlyPayment({
    interestRate,
    loanAmount,
    loanTerm,
  });

  return {
    emailAddress: createEmailAddress(payload.emailAddress),
    loanAmount,
    loanTerm,
    lifeInsuranceOptIn,
    interestRate,
    monthlyPayment,
  };
};

export { LoanCalculation, createLoanCalculation };
