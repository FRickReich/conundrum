require('dotenv').config();
const path = require('path');
const { Router } = require('express');
const pdf = require('pdfjs')
const fs = require('fs');
const mailjet = require ('node-mailjet').connect(process.env.MAILJET_KEY, process.env.MAILJET_SECRET)

const { logger } = require('./../../utils');

const router = Router();

router.route('/test').get(async (req, res) =>
{
    const request = mailjet
    .post("send", {'version': 'v3.1'})
    .request({
        "Messages":[
        {
            "From": {
                "Email": "info@conundrum.coffee",
                "Name": "conundrum.coffee"
            },
            "To": [
                {
                    "Email": "info@conundrum.coffee",
                    "Name": "Frederik"
                }
            ],
            "Subject": "Greetings from Mailjet.",
            "TextPart": "My first Mailjet email",
            "HTMLPart": "<h3>Dear passenger 1, welcome to <a href='https://www.mailjet.com/'>Mailjet</a>!</h3><br />May the delivery force be with you!",
            "CustomID": "AppGettingStartedTest"
        }
    ]
})
request
    .then((result) =>
    {
        res.json({ 
            success: true,
            body: result.body 
        });
    })
    .catch((err) =>
    {
        res.json({
            success: false,
            body: err
        })
    });
});

module.exports = router;
