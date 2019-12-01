export interface CalculateLoanRes {
  readonly emailAddress: string;
  readonly loanAmount: number;
  readonly loanTerm: number;
  readonly lifeInsuranceOptIn: boolean;
  readonly interestRate: number;
  readonly monthlyPayment: number;
}
