interface LoanAmount {
  value: number;
}

const minLoanAmount = 1000;
const maxLoanAmount = 10000;

const minLoanAmountMessage = `The loan amount needs to be greater or equal to ${minLoanAmount}`;
const maxLoanAmountMessage = `The loan amount needs to be smaller or equal to ${maxLoanAmount}`;

const createLoanAmount = (value: number): LoanAmount => {
  if (value < minLoanAmount) {
    throw Error(minLoanAmountMessage);
  }

  if (value > maxLoanAmount) {
    throw Error(maxLoanAmountMessage);
  }

  return { value };
};

export {
  LoanAmount,
  minLoanAmount,
  maxLoanAmount,
  minLoanAmountMessage,
  maxLoanAmountMessage,
  createLoanAmount,
};
