import { EmailAddress, LoanCalculation, LoanRepo } from 'calculator';

export class LocalStorageLoanRepo implements LoanRepo {
  findOne(address: EmailAddress): Promise<LoanCalculation | undefined> {
    const item = sessionStorage.getItem(address.value);

    if (item) {
      const calculation: LoanCalculation = JSON.parse(item);

      return Promise.resolve(calculation);
    }

    return Promise.resolve(undefined);
  }

  save(calculation: LoanCalculation): Promise<void> {
    sessionStorage.setItem(calculation.emailAddress.value, JSON.stringify(calculation));
    return Promise.resolve();
  }
}
