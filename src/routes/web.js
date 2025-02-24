const express =require('express');
const router = express.Router();

// declare route
router.get('/', (req, res) => {
    res.send('Hello World! Phuc')
})
  
router.get('/abc', (req, res) => {
    res.render('sample.ejs')
})

module.exports = router;