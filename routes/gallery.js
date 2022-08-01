var express = require('express');
var router = express.Router();

const Gallery = require('express-photo-gallery');

const options = {
  title: 'My Awesome Photo Gallery'
};

// let _id;
router.get('/gallery/:id', (req, res) => {
    let _id = req.params.id;
    console.log(_id)
    res.redirect(`project/${_id}`);
    // res.status(201).json({_id: _id})
});




module.exports = router;