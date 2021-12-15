const express = require('express');
const jobsController = require('../dataAccess/jobsController')
const cors = require('cors')

const router = express.Router();


router.get('/', async (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', "*")
    try {
        let result = await jobsController.getAllJobs(req, res);
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
})
router.get('/:id', async (req, res) => {

    try {
        let result = await jobsController.getJob(req, res, req.params.id);
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
})

router.route('/').post(jobsController.makeJob)

router.route('/alter').post(jobsController.alterJob)


module.exports = router;