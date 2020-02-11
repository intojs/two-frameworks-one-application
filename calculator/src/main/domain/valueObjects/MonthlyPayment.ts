import { InterestRate } from './InterestRate';
import { LoanAmount } from './LoanAmount';
import { LoanTerm } from './LoanTerm';

interface Payload {
  readonly interestRate: InterestRate;
  readonly loanAmount: LoanAmount;
  readonly loanTerm: LoanTerm;
}

export class MonthlyPayment {

  static create(payload: Payload): MonthlyPayment {
    return new MonthlyPayment(payload);
  }

  private static round(x: number): number {
    return Math.round(x * 100) / 100;
  }

  readonly value: number;

  private constructor({ loanAmount, interestRate, loanTerm }: Payload) {
    const principal = loanAmount.value;
    const rate = interestRate.value / 100 / 12;
    const payments = loanTerm.convertToMonths();

    const x = Math.pow(1 + rate, payments);
    const monthly = (principal * x * rate) / (x - 1);

    this.value = MonthlyPayment.round(monthly);
  }
}
