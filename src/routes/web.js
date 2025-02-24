const express =require('express');
const {getHomepage, getABCpage} = require('../controllers/homeController');
const router = express.Router();

// declare route
router.get('/', getHomepage);
  
router.get('/abc', getABCpage);

module.exports = router;