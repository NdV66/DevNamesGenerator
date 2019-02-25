const express = require('express');
const morgan = require('morgan');
const routerIndex = require('./server/routes/routerIndex');
const helmet = require('helmet')

const port = process.env.PORT || 8080;
const app = express();

app.use(helmet());
app.use(morgan('dev'));
app.use(express.json());
// app.use(express.static(__dirname));
app.use(express.static(__dirname + '/dist'));

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

app.use('/get-name', routerIndex);

app.listen(port, () => console.log(`Listen on port ${port}`));
