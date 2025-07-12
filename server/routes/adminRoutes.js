const express = require('express');
const { getPendingItems, approveItem, rejectItem } = require('../controllers/adminController');
const auth = require('../middleware/authMiddleware');
const admin = require('../middleware/adminMiddleware');

const router = express.Router();
router.get('/', auth, admin, getPendingItems);
router.put('/approve/:id', auth, admin, approveItem);
router.delete('/reject/:id', auth, admin, rejectItem);

module.exports = router;
