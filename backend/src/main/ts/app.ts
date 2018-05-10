import * as express from 'express';

import * as bodyParser from 'body-parser';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static('dist'));

app.get('/api/user', function(req, res, next) {
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify({ status: 'ok'}));
});

app.listen(3000, () => console.log('App is listening : http://localhost:3000'));
