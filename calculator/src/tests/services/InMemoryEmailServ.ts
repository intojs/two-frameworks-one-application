import { EmailServ } from '../../main/services/EmailServ';
import { CalculateLoanRes } from '../../main/useCases/CalculateLoanRes';

export class InMemoryEmailServ implements EmailServ {
  send(email: string): Promise<string> {
    return Promise.resolve(email);
  }

  generateEmail(calculation: CalculateLoanRes): string {
    return `Your monthly payment is ${calculation.monthlyPayment}`;
  }
}
