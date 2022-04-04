require('dotenv').config();
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
const cors = require('cors');

const { logger } = require('./utils');

const routes = require('./routes');

const app = express();
const port = process.env.SERVICE_PORT || 3000;
const databaseUrl = String(process.env.DB_URL);

mongoose.connect(databaseUrl, { replicaSet: 'rsNameHere', useNewUrlParser: true });

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());

app.use('/static', express.static(path.join(__dirname, '../../dist'), { index: false }));

app.use('/api/users', routes.users);
app.use('/api/', routes.test);
app.use('/*', routes.frontend);

app.listen(port, () =>
{
    logger.info(`Server running on port ${ port }`);
});
