import { LoanCalculation } from '../domain/entities/LoanCalculation';
import { EmailAddress } from '../domain/valueObjects/EmailAddress';

export interface LoanRepo {
  findOne(address: EmailAddress): Promise<LoanCalculation | undefined>;

  save(calculation: LoanCalculation): Promise<void>;
}
