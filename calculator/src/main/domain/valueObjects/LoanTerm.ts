interface LoanTerm {
  value: number;
}

const minLoanTerm = 1;
const maxLoanTerm = 5;

const invalidLoanTermMessage = `
  The loan term must be a whole number
  greater or equal to ${minLoanTerm}
  and
  smaller or equal to ${maxLoanTerm}
`;

const isWhole = (value: number): boolean => value % 1 === 0;

const isValid = (value: number): boolean => isWhole(value) && value >= minLoanTerm && value <= maxLoanTerm;

const convertLoanTermToMonths = (value: number): number => value * 12;

const createLoanTerm = (value: number): LoanTerm => {
  if (!isValid(value)) {
    throw Error(invalidLoanTermMessage);
  }

  return { value };
};

export { LoanTerm, invalidLoanTermMessage, convertLoanTermToMonths, createLoanTerm };
