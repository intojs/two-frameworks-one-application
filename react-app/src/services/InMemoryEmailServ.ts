import { CalculateLoanRes, EmailServ } from 'calculator';

export class InMemoryEmailServ implements EmailServ {
  send(email: string): Promise<string> {
    alert(`The following message has been sent to your email address: ${email}`);
    return Promise.resolve(email);
  }

  generateEmail(calculation: CalculateLoanRes): string {
    return `Your monthly payment is ${calculation.monthlyPayment} $`;
  }
}
