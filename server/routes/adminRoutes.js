const express = require('express');
const router = express.Router();
const auth = require('../middleware/authMiddleware');
const admin = require('../middleware/adminMiddleware');
const { getPendingItems, approveItem, rejectItem } = require('../controllers/adminController');

router.get('/pending', auth, admin, getPendingItems);
router.post('/approve/:id', auth, admin, approveItem);
router.delete('/reject/:id', auth, admin, rejectItem);

module.exports = router;
