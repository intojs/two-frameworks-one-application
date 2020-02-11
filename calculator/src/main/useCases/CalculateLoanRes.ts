import { LoanCalculation } from '../domain/entities/LoanCalculation';

export class CalculateLoanRes {

  static create(calculation: LoanCalculation): CalculateLoanRes {
    return new CalculateLoanRes(calculation);
  }

  readonly emailAddress: string;
  readonly loanAmount: number;
  readonly loanTerm: number;
  readonly lifeInsuranceOptIn: boolean;
  readonly interestRate: number;
  readonly monthlyPayment: number;

  private constructor(calculation: LoanCalculation) {
    this.emailAddress = calculation.emailAddress.value;
    this.loanAmount = calculation.loanAmount.value;
    this.loanTerm = calculation.loanTerm.value;
    this.lifeInsuranceOptIn = calculation.lifeInsuranceOptIn;
    this.interestRate = calculation.interestRate.value;
    this.monthlyPayment = calculation.monthlyPayment.value;
  }
}
