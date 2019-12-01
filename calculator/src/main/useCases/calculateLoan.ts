import { Context } from '../Context';
import { LoanCalculation } from '../domain/entities/LoanCalculation';
import { EmailAddress } from '../domain/valueObjects/EmailAddress';
import { InterestRate } from '../domain/valueObjects/InterestRate';
import { LoanAmount } from '../domain/valueObjects/LoanAmount';
import { LoanTerm } from '../domain/valueObjects/LoanTerm';
import { MonthlyPayment } from '../domain/valueObjects/MonthlyPayment';
import { CalculateLoanReq } from './CalculateLoanReq';
import { CalculateLoanRes } from './CalculateLoanRes';

export const calculateLoan = async (request: CalculateLoanReq): Promise<CalculateLoanRes> => {
  const { lifeInsuranceOptIn } = request;

  const emailAddress = new EmailAddress(request.emailAddress);
  const loanAmount = new LoanAmount(request.loanAmount);
  const loanTerm = new LoanTerm(request.loanTerm);
  const interestRate = new InterestRate(loanTerm, lifeInsuranceOptIn);
  const monthlyPayment = new MonthlyPayment({
    interestRate,
    loanAmount,
    loanTerm,
  });

  const calculation = new LoanCalculation({
    emailAddress,
    loanAmount,
    loanTerm,
    lifeInsuranceOptIn,
    interestRate,
    monthlyPayment,
  });

  await Context.loanRepo.save(calculation);

  const response: CalculateLoanRes = {
    emailAddress: calculation.emailAddress.value,
    loanAmount: calculation.loanAmount.value,
    loanTerm: calculation.loanTerm.value,
    lifeInsuranceOptIn,
    interestRate: calculation.interestRate.value,
    monthlyPayment: calculation.monthlyPayment.value,
  };

  const email: string = Context.emailServ.generateEmail(response);

  await Context.emailServ.send(email);

  return response;
};
