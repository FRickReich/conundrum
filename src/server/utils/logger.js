require('dotenv').config();
const log4js = require('log4js');

const serviceName = String(process.env.SERVICE_NAME);

log4js.configure({
    appenders: { [ serviceName ]: { type: 'stdout' } },
    categories: { default: { appenders: [ serviceName ], level: 'info' } }
});

module.exports = log4js.getLogger(serviceName);
