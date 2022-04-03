const { Router } = require('express');

const { logger } = require('./../../utils');
const User = require('../../models/User');

const router = Router();

router
    .route('/')
    .post(async (req, res, next) =>
    {
        try
        {
            const { username, password } = req.body;

            const newUser = new User();

            newUser.username = username;
            newUser.password = newUser.hashPassword(password);

            newUser.save()
            .then((user) =>
            {
                const message = `New user ${ user.username } created!`;

                logger.info(message);

                res.status(200).json({
                    success: true,
                    user,
                    message
                });
            })
            .catch(err => console.log(err));
        }
        catch (err)
        {
            next(err);   
        }
    })

module.exports = router;
