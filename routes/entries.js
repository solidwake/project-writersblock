const express = require('express');
const router = express.Router();
const { ensureAuth } = require('../middleware/auth');

const Entry = require('../models/Entry')

// @desc    Show Add page
// @route   GET /entries/add
router.get('/add', ensureAuth, (req, res) => {
    res.render('entries/add')
});

module.exports = router;