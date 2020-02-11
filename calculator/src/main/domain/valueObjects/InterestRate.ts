import { LoanTerm } from './LoanTerm';

interface InterestRate {
  readonly value: number;
}

const tireOneInterest = 20;
const tireTwoInterest = 15;
const minNumberOfYearsForTierTwoInterest = 3;
const interestDiscountForLifeInsurance = 3;

const createInterestRate = (term: LoanTerm, lifeInsuranceOptIn: boolean): InterestRate => {
  const interestRate = term.value < minNumberOfYearsForTierTwoInterest
    ? tireOneInterest
    : tireTwoInterest;

  const value = lifeInsuranceOptIn
    ? interestRate - interestDiscountForLifeInsurance
    : interestRate;

  return { value };
};

export { InterestRate, createInterestRate };
