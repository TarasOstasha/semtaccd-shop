var express = require('express');
var router = express.Router();




// AUTH
router.get('/login', (req, res) => {
  res.send('<h1>login</h1>')
});

router.post('/signUp', (req,res) => {
    res.send('<h1>Sign Up</h1>')
});

router.get('/admin', (req, res) => {
    res.send('<h1>admin</h1>')
  });


module.exports = router;