var express = require('express');
var router = express.Router();

const multer = require('multer');
const path = require('path');



const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, '../public/images/'))
  },
  filename: (req, file, cb) => {
    console.log(file);
    cb(null, Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({ storage: storage })

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
router.get('/', function (req, res, next) {
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
    nav: mainMenu,
    PageId: 'portfolio'
  });
});

let projects = [
  { group: 'kitchens', name: 'test-kitchen', imgs: [1, 2, 3, 4, 5, 6, 7] },
  { group: 'bathrooms', name: 'test-bathroom', imgs: [1, 2, 3, 4, 5, 6, 7] },
  { group: 'closets', name: 'test-closet', imgs: [1, 2, 3, 4, 5, 6, 7] },
  { group: 'bars', name: 'test-bar', imgs: [1, 2, 3, 4, 5, 6, 7] },
  { group: 'mudrooms', name: 'test-mudroom', imgs: [1, 2, 3, 4, 5, 6, 7] },
  { group: 'others', name: 'test-other', imgs: [1, 2, 3, 4, 5, 6, 7] }
];

router.get('/portfolio/:id', (req, res) => {
  const id = req.params.id;
  console.log(id, req)
  // res.render('project', { 
  //   title: 'portfolio page',
  //   PageId: 'portfolio'
  // });
  res.send(id + ' - kitchen');
});

/* GET Contact Us page. */
router.get('/contact-us', (req, res) => {
  res.render('contact-us', {
    title: 'contact us page',
    nav: mainMenu,
    PageId: 'contact-us'
  });
});

// Upload imgs
router.get('/upload', (req, res) => {
  res.status(201).send('Upload');
});

router.post('/upload', upload.single('image'), (req, res) => {
  res.status(201).send('Image Uploaded');
});

// let _id;
router.get('/gallery/:id', (req, res) => {
  let _id = req.params.id;
  console.log(_id)
  res.redirect(`/project/${_id}`);
  // res.status(201).json({_id: _id})
});


// photo gallery

// *** Login
router.get('/login', (req, res) => {
  res.render('login', {
    title: 'login',
    nav: mainMenu,
    PageId: 'login'
  });
  // res.send('<h1>login</h1>')
});

// *** ADMIN page *** \\
let credentials = {
  email: 'tonyjoss1990@gmail.com',
  password: '1111'
}
let status = '';
router.post('/admin', (req, res) => {
  try {
    if (credentials.email.includes(req.body.email) && credentials.password.includes(req.body.password)) {
      res.render('admin', {
        title: 'admin',
        nav: mainMenu,
        PageId: 'admin',
        status: 'valid'
      });
      
    } else if(credentials.email !== req.body.email && credentials.password !== req.body.password) {
        status = 'invalid email and password'; // set and send status to login-error route via query params
        res.redirect('/login-error?status='+status);
    } else if(credentials.email !== req.body.email){
        status = 'invalid email'; // set and send status to login-error route via query params
        res.redirect('/login-error?status='+status);
    } else if(credentials.password !== req.body.password) {
        status = status = 'invalid password'; // set and send status to login-error route via query params
        res.redirect('/login-error?status='+status);
    } 
  } catch (error) {
    res.status(501).send(error);
  }
});

router.get('/login-error', (req, res) => {
  console.log(req.query.status)
  try {
    res.render('login-error', {
      title: 'login Error',
      nav: mainMenu,
      PageId: 'login Error',
      status: req.query.status
    });
  } catch (error) {
    console.log('err', error)
  }
});

module.exports = router;
