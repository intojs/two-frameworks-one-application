export class EmailAddress {
  static readonly errorMessage = 'The email address is invalid';

  static create(value: string): EmailAddress {
    return new EmailAddress(value);
  }

  readonly value: string;

  // tslint:disable-next-line:max-line-length
  private readonly regex = RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);

  private constructor(value: string) {
    if (!this.regex.test(value)) {
      throw new Error(EmailAddress.errorMessage);
    }

    this.value = value;
  }
}
