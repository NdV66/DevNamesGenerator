const express = require('express');
const path = require('path');
const morgan = require('morgan');

const port = process.env.PORT || 8080;
const app = express();

app.use(morgan('combined'));
app.use(express.static(__dirname));
app.use(express.static(__dirname + '/dist'));

app.get('/', (req, res) => res.sendFile(path.resolve(__dirname, 'index.html')));

app.listen(port, () => console.log(`Listen on port ${port}`));