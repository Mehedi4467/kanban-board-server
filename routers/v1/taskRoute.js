const express = require('express');
const router = express.Router();

//internal import
const { getTask } = require('../../comtroller/taskController');

router.get('/', getTask);

module.exports = router;