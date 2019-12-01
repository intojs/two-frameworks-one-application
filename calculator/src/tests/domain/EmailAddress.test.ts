import { EmailAddress } from '../../main/domain/valueObjects/EmailAddress';

describe('EmailAddress', () => {
  it('should create a valid email address', () => {
    const testValue = 'john.doe@email.com';

    const emailAddress = new EmailAddress(testValue);

    expect(emailAddress.value).toEqual(testValue);
  });

  it('should throw if the email value is invalid', () => {
    expect(() => {
      return new EmailAddress('john');
    }).toThrow(EmailAddress.errorMessage);

    expect(() => {
      return new EmailAddress('john@');
    }).toThrow(EmailAddress.errorMessage);

    expect(() => {
      return new EmailAddress('@example.com');
    }).toThrow(EmailAddress.errorMessage);
  });
});
