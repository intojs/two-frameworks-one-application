import React, { FC, useState } from 'react';

import { calculateLoan, CalculateLoanRes } from 'calculator';

import { LoanCalculation as Calculation } from './LoanCalculation';
import { LoanCalculatorForm, LoanCalculatorFormValues } from './LoanCalculatorForm';

export const LoanCalculator: FC = () => {
  const [loanCalculation, setLoanCalculation] = useState<CalculateLoanRes | null>(null);

  const onSubmit = async (values: LoanCalculatorFormValues) => {
    const {
      email,
      loanAmount,
      loanTerm,
      lifeInsuranceOptIn,
    } = values;

    const calculation: CalculateLoanRes = await calculateLoan({
      emailAddress: email,
      loanAmount,
      loanTerm,
      lifeInsuranceOptIn,
    });

    setLoanCalculation(calculation);
  };

  return (
    <>
      <h1 className='mt-5'>Loan calculator</h1>
      <hr/>
      {
        loanCalculation
          ? <Calculation calculation={loanCalculation}/>
          : <LoanCalculatorForm submit={onSubmit}/>
      }
    </>
  );
};
