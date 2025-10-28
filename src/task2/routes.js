const express = require('express');
const router = express.Router();
const counter = require('./counter');
const logger = require('../logger');


// Log format guidelines per task
// [ENDPOINT] HTTP_METHOD '/url/path'
// [COUNTER] METHOD CURRENT_VALUE


router.get('/counter-increase', (req, res) => {
logger.info(`[ENDPOINT] GET '/counter-increase'`);
const newVal = counter.increase();
logger.info(`[COUNTER] increase ${newVal}`);
res.json({ value: newVal });
});


router.get('/counter-read', (req, res) => {
logger.info(`[ENDPOINT] GET '/counter-read'`);
const val = counter.read();
logger.info(`[COUNTER] read ${val}`);
res.json({ value: val });
});


router.get('/counter-reset', (req, res) => {
logger.info(`[ENDPOINT] GET '/counter-reset'`);
const val = counter.zero();
logger.info(`[COUNTER] zeroed ${val}`);
res.json({ value: val });
});


module.exports = router;