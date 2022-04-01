const path = require('path');
const { Router } = require('express');

const router = Router();

router.route('/*').get((req, res) => {
    res.status(200).sendFile( path.join(__dirname,'../../../dist' , 'index.html'));
});

module.exports = router;
