import { LoanTerm } from './LoanTerm';

export class InterestRate {

  static create(term: LoanTerm, lifeInsuranceOptIn: boolean): InterestRate {
    return new InterestRate(term, lifeInsuranceOptIn);
  }

  readonly value: number;

  private readonly tireOneInterest = 20;
  private readonly tireTwoInterest = 15;
  private readonly minNumberOfYearsForTierTwoInterest = 3;
  private readonly interestDiscountForLifeInsurance = 3;

  private constructor(term: LoanTerm, lifeInsuranceOptIn: boolean) {
    const interestRate = term.value < this.minNumberOfYearsForTierTwoInterest
      ? this.tireOneInterest
      : this.tireTwoInterest;

    this.value = lifeInsuranceOptIn
      ? interestRate - this.interestDiscountForLifeInsurance
      : interestRate;
  }
}
