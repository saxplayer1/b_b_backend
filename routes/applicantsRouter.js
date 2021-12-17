const express = require('express');
const applicantController = require('../dataAccess/applicantController')
const cors = require('cors')
const jobsController = require("../dataAccess/jobsController");

const router = express.Router();


router.get('/', async (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', "*")
    try {
        let result = await applicantController.getAllApplicants(req, res);
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
})

router.route('/').post(applicantController.createApplicant)

router.post('/alter', async (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', "*")
    try {
        let result = await applicantController.alterApplicant(req, res);
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
})

router.post('/delete', async (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', "*")
    try {
        let result = await applicantController.deleteApplicant(req, res);
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
})

router.get('/jobs', async (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', "*")
    try {
        let result = await applicantController.getJobForApplicant(req, res);
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
})

module.exports = router;