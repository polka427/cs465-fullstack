// app_server/routes/index.js

const express = require('express');
const router = express.Router();

const ctrlMain = require('../controllers/main');

router.get('/', ctrlMain.index);

module.exports = router;
