const express = require('express');
const path = require('path');
const morgan = require('morgan');
const gitRouter = require('./server/routes/gitRouter');

const port = process.env.PORT || 8080;
const app = express();

app.use(morgan('dev'));
app.use(express.json());
// app.use(express.static(__dirname));
app.use(express.static(__dirname + '/dist'));
app.use('/git', gitRouter);

app.get('/a', (req, res) => res.send('aaa'));

app.listen(port, () => console.log(`Listen on port ${port}`));
