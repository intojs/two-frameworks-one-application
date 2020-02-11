import { Context } from '../Context';
import { createLoanCalculation, LoanCalculation } from '../domain/entities/LoanCalculation';
import { CalculateLoanReq } from './CalculateLoanReq';
import { CalculateLoanRes, createCalculateLoanRes } from './CalculateLoanRes';

export const calculateLoan = async (request: CalculateLoanReq): Promise<CalculateLoanRes> => {
  const calculation: LoanCalculation = createLoanCalculation(request);

  await Context.loanRepo.save(calculation);

  const res: CalculateLoanRes = createCalculateLoanRes(calculation);

  const email: string = Context.emailServ.generateEmail(res);

  await Context.emailServ.send(email);

  return res;
};
