export interface CalculateLoanReq {
  readonly emailAddress: string;
  readonly loanAmount: number;
  readonly loanTerm: number;
  readonly lifeInsuranceOptIn: boolean;
}
