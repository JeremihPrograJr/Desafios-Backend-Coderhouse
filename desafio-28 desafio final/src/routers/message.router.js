
const express = require('express');
const router = express.Router();

const messageController = require('../controllers/message.controller')

router.post('/message/create',messageController.CREATE)
router.get('/message/read',messageController.READ)
router.put('/message/update',messageController.UPDATE)

module.exports= router