import { CalculateLoanRes } from '../useCases/CalculateLoanRes';

export interface EmailServ {
  send(email: string): Promise<string>;

  generateEmail(calculation: CalculateLoanRes): string;
}
