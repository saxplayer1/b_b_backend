const express = require('express');
const specsController = require('../dataAccess/specsController')
const cors = require('cors')

const router = express.Router();

router.post('/', async (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', "*")
    try {
        let result = await specsController.makeSpecs(req, res);
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
})

module.exports = router;