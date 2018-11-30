import * as compression from 'compression';
import * as express from 'express';
import * as path from 'path';

const app = express();
const port = process.env.PORT || 3000;

app.use(compression());

app.use('/public', express.static(path.join(__dirname, 'public')));

app.use('*', express.static(path.join(__dirname, 'public')));

app.listen(port);

// tslint:disable-next-line
console.info(`Server is running on localhost:${port}`);
