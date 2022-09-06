const express = require('express');
const router = express.Router();

//internal import
const { getTask, postTask, taskStatus } = require('../../comtroller/taskController');

router.get('/task', getTask);
router.post('/api/v1/task', postTask);
router.put('/api/vi/task/status/update/:id', taskStatus)

module.exports = router;