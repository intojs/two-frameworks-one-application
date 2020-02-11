import { LoanCalculation } from '../domain/entities/LoanCalculation';

interface CalculateLoanRes {
  readonly emailAddress: string;
  readonly loanAmount: number;
  readonly loanTerm: number;
  readonly lifeInsuranceOptIn: boolean;
  readonly interestRate: number;
  readonly monthlyPayment: number;
}

const createCalculateLoanRes = (calculation: LoanCalculation): CalculateLoanRes => ({
  emailAddress: calculation.emailAddress.value,
  loanAmount: calculation.loanAmount.value,
  loanTerm: calculation.loanTerm.value,
  lifeInsuranceOptIn: calculation.lifeInsuranceOptIn,
  interestRate: calculation.interestRate.value,
  monthlyPayment: calculation.monthlyPayment.value,
});

export { CalculateLoanRes, createCalculateLoanRes };
