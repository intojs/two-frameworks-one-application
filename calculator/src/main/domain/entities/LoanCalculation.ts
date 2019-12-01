import { EmailAddress } from '../valueObjects/EmailAddress';
import { InterestRate } from '../valueObjects/InterestRate';
import { LoanAmount } from '../valueObjects/LoanAmount';
import { LoanTerm } from '../valueObjects/LoanTerm';
import { MonthlyPayment } from '../valueObjects/MonthlyPayment';

interface Payload {
  readonly emailAddress: EmailAddress;
  readonly loanAmount: LoanAmount;
  readonly loanTerm: LoanTerm;
  readonly lifeInsuranceOptIn: boolean;
  readonly interestRate: InterestRate;
  readonly monthlyPayment: MonthlyPayment;
}

export class LoanCalculation {
  readonly emailAddress: EmailAddress;
  readonly loanAmount: LoanAmount;
  readonly loanTerm: LoanTerm;
  readonly lifeInsuranceOptIn: boolean;
  readonly interestRate: InterestRate;
  readonly monthlyPayment: MonthlyPayment;

  constructor(payload: Payload) {
    const {
      emailAddress,
      loanAmount,
      loanTerm,
      lifeInsuranceOptIn,
      interestRate,
      monthlyPayment,
    } = payload;

    this.emailAddress = emailAddress;
    this.loanAmount = loanAmount;
    this.loanTerm = loanTerm;
    this.lifeInsuranceOptIn = lifeInsuranceOptIn;
    this.interestRate = interestRate;
    this.monthlyPayment = monthlyPayment;
  }
}
