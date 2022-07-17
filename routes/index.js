var express = require('express');
var router = express.Router();

let mainMenu = [
  {
    link: '/', text: 'Home', name: 'index'
  },
  {
    link: '/about', text: 'About', name: 'about'
  },
  {
    link: '/portfolio', text: 'Portfolio', name: 'portfolio'
  },
  {
    link: '/contact-us', text: 'Contact Us', name: 'contact-us'
  }
];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
    title: 'Semta Home', 
    nav: mainMenu,
    PageId: 'index'
  });
});

/* GET About page. */
router.get('/about', (req, res) => {
  res.render('about', { 
    title: 'about page',
    nav: mainMenu,
    PageId: 'about'
  });
});

/* GET Portfolio page. */
router.get('/portfolio', (req, res) => {
  res.render('portfolio', { 
    title: 'portfolio page',
    nav: mainMenu ,
    PageId: 'portfolio'
  });
});

/* GET Contact Us page. */
router.get('/contact-us', (req, res) => {
  res.render('contact-us', { 
    title: 'contact us page', 
    nav: mainMenu,
    PageId: 'contact-us'
  });
});

module.exports = router;
