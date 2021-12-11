const express = require('express');
const router = express.Router();

console.log("Routes Loaded")
router.use('/',require('./home'));

module.exports = router;
