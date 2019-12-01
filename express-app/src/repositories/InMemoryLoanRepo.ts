import { EmailAddress, LoanCalculation, LoanRepo } from 'calculator';

export class InMemoryLoanRepo implements LoanRepo {
  readonly calculations: LoanCalculation[] = [];

  findOne(address: EmailAddress): Promise<LoanCalculation | undefined> {
    const predicate = (c: LoanCalculation) => c.emailAddress.value === address.value;
    const calculation = this.calculations.find(predicate);

    return Promise.resolve(calculation);
  }

  save(calculation: LoanCalculation): Promise<void> {
    this.calculations.push(calculation);

    return Promise.resolve();
  }
}
