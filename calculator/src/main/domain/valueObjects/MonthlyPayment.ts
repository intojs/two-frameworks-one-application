import { InterestRate } from './InterestRate';
import { LoanAmount } from './LoanAmount';
import { convertLoanTermToMonths, LoanTerm } from './LoanTerm';

interface MonthlyPayment {
  value: number;
}

interface Payload {
  readonly interestRate: InterestRate;
  readonly loanAmount: LoanAmount;
  readonly loanTerm: LoanTerm;
}

const round = (x: number): number => Math.round(x * 100) / 100;

const createMonthlyPayment = ({ loanAmount, interestRate, loanTerm }: Payload): MonthlyPayment => {
  const principal = loanAmount.value;
  const rate = interestRate.value / 100 / 12;
  const payments = convertLoanTermToMonths(loanTerm.value);

  const x = Math.pow(1 + rate, payments);
  const monthly = (principal * x * rate) / (x - 1);

  return { value: round(monthly) };
};

export { MonthlyPayment, createMonthlyPayment };
