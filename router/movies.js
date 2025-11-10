const express = require('express');
const router = express.Router();
const query = require('../database/query');

router.get("/", query.index);
router.get("/:id", query.show);

module.exports = router;