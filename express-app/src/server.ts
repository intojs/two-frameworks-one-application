import bodyParser from 'body-parser';
import express from 'express';

import { loanRouter } from './loanRouter';

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/loan', loanRouter);

app.listen(port, () => console.log(`App listening on port ${port}!`));
