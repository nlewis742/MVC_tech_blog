const router = require('express').Router();

// what are our Rouetes? or Endpoints?

// Landing Page
router.get('/', (req, res) => {
    // query the db for existing posts

    res.render('homepage');
});

router.use('/api', require('./api'));


module.exports = router;