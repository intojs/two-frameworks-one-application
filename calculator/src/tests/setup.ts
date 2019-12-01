import { Context } from '../main/Context';
import { InMemoryLoanRepo } from './repositories/InMemoryLoanRepo';
import { InMemoryEmailServ } from './services/InMemoryEmailServ';

Context.initialize({
  loanRepo: new InMemoryLoanRepo(),
  emailServ: new InMemoryEmailServ(),
});
