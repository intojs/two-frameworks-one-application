import React from 'react';
import ReactDOM from 'react-dom';

import { Context } from 'calculator';

import { App } from './components/App';
import { LocalStorageLoanRepo } from './repositories/LocalStorageLoanRepo';
import { InMemoryEmailServ } from './services/InMemoryEmailServ';

import './index.css';

Context.initialize({
  loanRepo: new LocalStorageLoanRepo(),
  emailServ: new InMemoryEmailServ(),
});

ReactDOM.render(<App/>, document.getElementById('root'));
