const express = require('express');
const employersController = require('../dataAccess/employersController')
const cors = require('cors')

const router = express.Router();

router.get('/', async (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', "*")
    try {
        let result = await employersController.getEmployers(req, res);
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
})

router.get('/names', async (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', "*")
    try {
        let result = await employersController.getCompanyNames(req, res);
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
})
router.get('/jobs', async (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', "*")
    try {
        let result = await employersController.getJobsForCompany(req, res);
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
})

router.post('/', async (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', "*")
    try {
        let result = await employersController.createCompany(req, res);
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
})
router.post('/alter', async (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', "*")
    try {
        let result = await employersController.alterCompany(req, res);
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
})

router.post('/delete', async (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', "*")
    try {
        let result = await employersController.deleteCompany(req, res);
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
})

module.exports = router;