import { ErrorMessage, Formik, FormikProps } from 'formik';
import React, { FC } from 'react';
import { Button, Form, FormFeedback, FormGroup, Input, Label } from 'reactstrap';
import * as Yup from 'yup';

import { LoanAmount, LoanTerm } from 'calculator';

interface LoanCalculatorFormProps {
  submit(values: LoanCalculatorFormValues): void;
}

export interface LoanCalculatorFormValues {
  email: string;
  loanAmount: number;
  loanTerm: number;
  lifeInsuranceOptIn: boolean;
}

const initialValues: LoanCalculatorFormValues = {
  email: '',
  loanAmount: 1000,
  loanTerm: 1,
  lifeInsuranceOptIn: false,
};

const validationSchema = Yup
  .object()
  .shape({
    email: Yup
      .string()
      .email('Invalid email')
      .required('The email address is required'),
    loanAmount: Yup
      .number()
      .min(LoanAmount.min, `You need to borrow at least ${LoanAmount.min} $`)
      .max(LoanAmount.max, `You can borrow at most ${LoanAmount.max} $`)
      .required('The loan amount is required'),
    loanTerm: Yup
      .number()
      .min(LoanTerm.min, `Minimum loan term is ${LoanTerm.min} year`)
      .max(LoanTerm.max, `Maximum loan term is ${LoanTerm.max} years`)
      .required('The loan term is required'),
  });

export const LoanCalculatorForm: FC<LoanCalculatorFormProps> = ({ submit }) => (
  <Formik
    initialValues={initialValues}
    validationSchema={validationSchema}
    onSubmit={(values: LoanCalculatorFormValues) => submit(values)}
  >
    {(props: FormikProps<LoanCalculatorFormValues>) => {
      const {
        handleSubmit,
        handleChange,
        handleBlur,
        values,
        errors,
        touched,
      } = props;

      return (
        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <Label for='email'>Email *</Label>
            <Input
              type='email'
              id='email'
              name='email'
              placeholder='email@example.com'
              autoComplete='off'
              onChange={handleChange}
              onBlur={handleBlur}
              invalid={!!(errors.email && touched.email)}
              value={values.email}
            />
            <ErrorMessage name='email'>
              {(msg) => (<FormFeedback>{msg}</FormFeedback>)}
            </ErrorMessage>
          </FormGroup>
          <FormGroup>
            <Label for='loanAmount'>Loan amount $ *</Label>
            <Input
              type='number'
              id='loanAmount'
              name='loanAmount'
              placeholder='Loan amount'
              autoComplete='off'
              onChange={handleChange}
              onBlur={handleBlur}
              invalid={!!(errors.loanAmount && touched.loanAmount)}
              value={props.values.loanAmount}
            />
            <ErrorMessage name='loanAmount'>
              {(msg) => (<FormFeedback>{msg}</FormFeedback>)}
            </ErrorMessage>
          </FormGroup>
          <FormGroup>
            <Label for='loanTerm'>Loan term (years) *</Label>
            <Input
              type='number'
              id='loanTerm'
              name='loanTerm'
              placeholder='Loan term'
              autoComplete='off'
              onChange={handleChange}
              onBlur={handleBlur}
              invalid={!!(errors.loanTerm && touched.loanTerm)}
              value={props.values.loanTerm}
            />
            <ErrorMessage name='loanTerm'>
              {(msg) => (<FormFeedback>{msg}</FormFeedback>)}
            </ErrorMessage>
          </FormGroup>
          <FormGroup check className='mb-3'>
            <Label check for='lifeInsuranceOptIn'>
              <Input
                type='checkbox'
                id='lifeInsuranceOptIn'
                name='lifeInsuranceOptIn'
                onChange={handleChange}
                defaultChecked={props.values.lifeInsuranceOptIn}
              />
              Life insurance opt-in
            </Label>
          </FormGroup>
          <Button type='submit'>Calculate</Button>
        </Form>
      );
    }}
  </Formik>
);
