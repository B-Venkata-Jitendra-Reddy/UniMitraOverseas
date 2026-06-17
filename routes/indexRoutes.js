const express = require('express');
const router = express.Router();
const homeController = require('../controllers/homeController');
const leadController = require('../controllers/contactController');
const upload = require('../middleware/uploadMiddleware');

router.get('/', homeController.home);
router.get('/about', homeController.about);
router.get('/services', homeController.services);
router.get('/contact', homeController.contact);
router.get('/visa', homeController.visaPage);
router.get('/coaching', homeController.coachingPage);
router.get('/study-in', homeController.studyInPage);

module.exports = router;