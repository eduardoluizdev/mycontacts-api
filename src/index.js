require('express-async-errors');

const express = require('express');

const cors = require('./app/middlewares/cors');
const errorHandle = require('./app/middlewares/errorHandler');
const routes = require('./routes');

const app = express();

app.use(express.json());
app.use(cors);
app.use(routes);
app.use(errorHandle);

app.listen(3001, () => console.log('🔥 Server started at http://localhost:3001'));
