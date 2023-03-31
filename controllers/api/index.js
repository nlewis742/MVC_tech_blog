const router = require('express').Router();

// what are our Rouetes? or Endpoints?

// API Page  --> '/api'
router.get('/', (req, res) => {
    res.render('landing');
});




module.exports = router;