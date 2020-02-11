import express from 'express';
import { BAD_REQUEST, INTERNAL_SERVER_ERROR } from 'http-status-codes';
import * as Joi from 'joi';

import {
  calculateLoan, CalculateLoanRes, Context, maxLoanAmount, maxLoanTerm, minLoanAmount, minLoanTerm,
} from 'calculator';

import { InMemoryLoanRepo } from './repositories/InMemoryLoanRepo';
import { InMemoryEmailServ } from './services/InMemoryEmailServ';

Context.initialize({
  loanRepo: new InMemoryLoanRepo(),
  emailServ: new InMemoryEmailServ(),
});

const schema = Joi.object({
  emailAddress: Joi
    .string()
    .email()
    .required(),
  loanAmount: Joi
    .number()
    .min(minLoanAmount)
    .max(maxLoanAmount)
    .required(),
  loanTerm: Joi
    .number()
    .min(minLoanTerm)
    .max(maxLoanTerm)
    .required(),
  lifeInsuranceOptIn: Joi.bool(),
});

const loanRouter = express.Router();

loanRouter.post('/calculate', async (req, res) => {
  try {
    const { error, value } = Joi.validate(req.body, schema);

    if (error) {
      res.status(BAD_REQUEST).send(error);

      return;
    }

    const calculation: CalculateLoanRes = await calculateLoan(value);

    res.send(calculation);
  } catch (e) {
    res.status(INTERNAL_SERVER_ERROR).send(e);
  }
});

export { loanRouter };
