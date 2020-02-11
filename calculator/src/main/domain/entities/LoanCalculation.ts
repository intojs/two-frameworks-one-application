import { EmailAddress } from '../valueObjects/EmailAddress';
import { InterestRate } from '../valueObjects/InterestRate';
import { LoanAmount } from '../valueObjects/LoanAmount';
import { LoanTerm } from '../valueObjects/LoanTerm';
import { MonthlyPayment } from '../valueObjects/MonthlyPayment';

interface Payload {
  readonly emailAddress: string;
  readonly loanAmount: number;
  readonly loanTerm: number;
  readonly lifeInsuranceOptIn: boolean;
}

export class LoanCalculation {

  static create(payload: Payload) {
    return new LoanCalculation(payload);
  }

  readonly emailAddress: EmailAddress;
  readonly loanAmount: LoanAmount;
  readonly loanTerm: LoanTerm;
  readonly lifeInsuranceOptIn: boolean;
  readonly interestRate: InterestRate;
  readonly monthlyPayment: MonthlyPayment;

  private constructor(payload: Payload) {
    this.emailAddress = EmailAddress.create(payload.emailAddress);

    this.loanAmount = LoanAmount.create(payload.loanAmount);

    this.loanTerm = LoanTerm.create(payload.loanTerm);

    this.lifeInsuranceOptIn = payload.lifeInsuranceOptIn;

    this.interestRate = InterestRate.create(this.loanTerm, payload.lifeInsuranceOptIn);

    this.monthlyPayment = MonthlyPayment.create({
      interestRate: this.interestRate,
      loanAmount: this.loanAmount,
      loanTerm: this.loanTerm,
    });
  }
}
