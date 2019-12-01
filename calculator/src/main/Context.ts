import { LoanRepo } from './repositories/LoanRepo';
import { EmailServ } from './services/EmailServ';

interface Dependencies {
  readonly loanRepo: LoanRepo;
  readonly emailServ: EmailServ;
}

export class Context {
  static loanRepo: LoanRepo;
  static emailServ: EmailServ;

  static initialize(dependencies: Dependencies) {
    Context.loanRepo = dependencies.loanRepo;
    Context.emailServ = dependencies.emailServ;
  }
}
