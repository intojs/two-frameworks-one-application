import React, { FC } from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';

import { CalculateLoanRes } from 'calculator';

interface Props {
  calculation: CalculateLoanRes;
}

export const LoanCalculation: FC<Props> = (props: Props) => {
  const { calculation } = props;

  return (
    <>
      <ListGroup>
        <ListGroupItem active><strong>Your calculation</strong></ListGroupItem>
        <ListGroupItem>
          Email address: <strong>{calculation.emailAddress}</strong>
        </ListGroupItem>
        <ListGroupItem>
          Loan amount: <strong>{calculation.loanAmount} $</strong>
        </ListGroupItem>
        <ListGroupItem>
          Loan term: <strong>{calculation.loanTerm} years</strong>
        </ListGroupItem>
        <ListGroupItem>
          Loan insurance opt in: <strong>{`${calculation.lifeInsuranceOptIn}`}</strong>
        </ListGroupItem>
        <ListGroupItem>
          Interest rate: <strong>{calculation.interestRate} %</strong>
        </ListGroupItem>
        <ListGroupItem>
          Monthly payment: <strong>{calculation.monthlyPayment} $</strong>
        </ListGroupItem>
      </ListGroup>
    </>
  );
};
