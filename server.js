const express = require('express');
const app = express();

const bodyParser = require('body-parser');
const compression = require('compression');
const morgan = require('morgan');
const PORT = Number( process.env.PORT || 3000 );
const Counters = require('./lib/Counters');

app.use(morgan('combined'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(compression());

function sendFile(name) {
  return function(req, res) {
    res.sendFile(__dirname + '/public/' + name);
  };
}

app.get('/', sendFile('index.html'));
app.get('/main.css', sendFile('main.css'));
app.get('/bundle.js', sendFile('bundle.js'));

// [json] GET /api/v1/counters
// => [
// =>   {id: 'asdf', title: 'boop',  count: 4},
// =>   {id: 'zxcv', title: 'steve', count: 3}
// => ]
app.get('/api/v1/counters', function(req, res) {
  res.json(Counters.all())
});

// [json] POST {title: 'bob'} /api/v1/counters
// => [
// =>   {id: 'asdf', title: 'boop',  count: 4},
// =>   {id: 'zxcv', title: 'steve', count: 3},
// =>   {id: 'qwer', title: 'bob',   count: 0}
// => ]
app.post('/api/v1/counters', function(req, res) {
  res.json(Counters.create(req.body.title));
})

// [json] DELETE {id: 'asdf'} /api/v1/counter
// => [
// =>   {id: 'zxcv', title: 'steve', count: 3},
// =>   {id: 'qwer', title: 'bob',   count: 0}
// => ]
app.delete('/api/v1/counters/:id', function(req, res) {
  const id = req.param('id')
  Counters.delete(id)
  res.json();
});

// [json] POST {id: 'qwer'} /api/v1/counter/inc
// => [
// =>   {id: 'zxcv', title: 'steve', count: 3},
// =>   {id: 'qwer', title: 'bob',   count: 1}
// => ]
app.post('/api/v1/counters/:id/inc', function(req, res) {
  const id = req.param('id')
  res.json(Counters.inc(id));
});

// [json] POST {id: 'zxcv'} /api/v1/counter/dec
// => [
// =>   {id: 'zxcv', title: 'steve', count: 2},
// =>   {id: 'qwer', title: 'bob',   count: 1}
// => ]
app.post('/api/v1/counters/:id/dec', function(req, res) {
  const id = req.param('id')
  res.json(Counters.dec(id));
});

app.get('*', sendFile('index.html'));
app.head('*', sendFile('index.html'));

app.listen(PORT, console.log.bind(null, 'PORT: ' + PORT));