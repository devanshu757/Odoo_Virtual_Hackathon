const express = require('express');
const { getAllItems, addItem } = require('../controllers/itemController');
const auth = require('../middleware/authMiddleware');

const router = express.Router();
router.get('/', getAllItems);
router.post('/', auth, addItem);

module.exports = router;
