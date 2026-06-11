const express = require('express');
const router = express.Router();
const homeController = require('../controllers/homeController');
const leadController = require('../controllers/leadController');
const upload = require('../middleware/uploadMiddleware');

router.get('/', homeController.home);
router.get('/about', homeController.about);
// router.get('/destinations', homeController.destinations);
router.get('/services', homeController.services);
router.get('/contact', homeController.contact);
router.get('/visa', homeController.visaPage);
router.get('/coaching', homeController.coachingPage);
router.get('/study-in', homeController.studyInPage);
// router.get('/application', homeController.applicationForm);
// router.post('/lead', leadController.submitLead);
// router.post('/application', upload.fields([{ name: 'resume' }, { name: 'passport' }]), applicationController.submitApplication);

module.exports = router;