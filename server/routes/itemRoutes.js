const express = require('express');
const router = express.Router();
const auth = require('../middleware/authMiddleware');
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });
const { addItem, getApprovedItems, getItemById } = require('../controllers/itemController');

router.post('/add', auth, upload.array('images', 5), addItem);
router.get('/', getApprovedItems);
router.get('/:id', getItemById);

module.exports = router;