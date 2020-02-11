import { createEmailAddress, invalidEmailMessage } from '../../main/domain/valueObjects/EmailAddress';

describe('EmailAddress', () => {
  it('should create a valid email address', () => {
    const testValue = 'john.doe@email.com';

    const emailAddress = createEmailAddress(testValue);

    expect(emailAddress.value).toEqual(testValue);
  });

  it('should throw if the email value is invalid', () => {
    expect(() => createEmailAddress('john')).toThrow(invalidEmailMessage);

    expect(() => createEmailAddress('john@')).toThrow(invalidEmailMessage);

    expect(() => createEmailAddress('@example.com')).toThrow(invalidEmailMessage);
  });
});
