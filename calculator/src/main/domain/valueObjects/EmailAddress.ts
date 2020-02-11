interface EmailAddress {
  readonly value: string;
}

// tslint:disable-next-line:max-line-length
const regex = RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);

const invalidEmailMessage = 'The email address is invalid';

const isValid = (value: string): boolean => regex.test(value);

const createEmailAddress = (value: string): EmailAddress => {
  if (!isValid(value)) {
    throw Error(invalidEmailMessage);
  }

  return { value };
};

export { EmailAddress, invalidEmailMessage, createEmailAddress };
