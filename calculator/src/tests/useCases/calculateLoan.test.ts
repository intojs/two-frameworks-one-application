import { Context } from '../../main/Context';
import { createEmailAddress } from '../../main/domain/valueObjects/EmailAddress';
import { calculateLoan } from '../../main/useCases/calculateLoan';
import { CalculateLoanReq } from '../../main/useCases/CalculateLoanReq';

describe('calculateLoan', () => {
  let request: CalculateLoanReq;

  beforeEach(async () => {
    request = {
      emailAddress: 'john.doe@email.com',
      loanAmount: 10000,
      loanTerm: 5,
      lifeInsuranceOptIn: true,
    };
  });

  it('should calculate the monthly payment', async () => {
    const calculation = await calculateLoan(request);

    const expectedInterestRate = 12;
    const expectedMonthlyPayment = 222.44;

    expect(calculation.interestRate).toEqual(expectedInterestRate);
    expect(calculation.monthlyPayment).toEqual(expectedMonthlyPayment);
  });

  it('should save the calculation', async () => {
    const calculation = await calculateLoan(request);

    const address = createEmailAddress(calculation.emailAddress);

    const savedCalculation = await Context.loanRepo.findOne(address);

    expect(savedCalculation!.emailAddress.value).toEqual(request.emailAddress);
  });

  it('should send an email to the provided email address', async () => {
    const spy = jest.spyOn(Context.emailServ, 'send');

    const calculation = await calculateLoan(request);

    const expectedEmail = Context.emailServ.generateEmail(calculation);

    expect(spy).toHaveBeenCalledWith(expectedEmail);
  });
});
