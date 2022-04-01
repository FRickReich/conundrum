require('dotenv').config();
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = process.env.SERVICE_PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res) =>
{
    res.status(200).sendFile(path.join(__dirname, '../public/index.html'));
});

app.listen(port, () =>
{
    console.log(`Server läuft auf port ${ port }!`);
});
