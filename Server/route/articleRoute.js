const express = require('express');
const router = express.Router();

// Importing controller functions
const { createArticle } = require('../controller/articleController');

// Define routes for handling articles
// Route to create a new article
router.post('/postarticle', createArticle);

module.exports = router;
