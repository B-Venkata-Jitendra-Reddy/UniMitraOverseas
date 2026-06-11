// const express = require('express');
// const router = express.Router();
// const adminController = require('../controllers/adminController');
// const universityController = require('../controllers/universityController');
// const scholarshipController = require('../controllers/scholarshipController');
// const blogController = require('../controllers/blogController');
// const leadController = require('../controllers/leadController');
// const applicationController = require('../controllers/applicationController');
// const { isAuthenticated } = require('../middleware/authMiddleware');
// const upload = require('../middleware/uploadMiddleware');

// // Auth routes
// router.get('/login', adminController.loginPage);
// router.post('/login', adminController.login);
// router.get('/logout', adminController.logout);

// // Protected routes
// router.use(isAuthenticated);
// router.get('/dashboard', adminController.dashboard);
// router.get('/export-leads', adminController.exportLeads);
// router.get('/leads', leadController.getAllLeads);
// router.get('/applications', applicationController.getAllApplications);

// // University management
// router.get('/universities', universityController.adminUniversities);
// router.post('/universities', upload.single('logo'), universityController.createUniversity);
// router.post('/universities/:id', upload.single('logo'), universityController.updateUniversity);
// router.delete('/universities/:id', universityController.deleteUniversity);

// // Scholarship management
// router.get('/scholarships', scholarshipController.adminScholarships);
// router.post('/scholarships', scholarshipController.createScholarship);
// router.post('/scholarships/:id', scholarshipController.updateScholarship);
// router.delete('/scholarships/:id', scholarshipController.deleteScholarship);

// // Blog management
// router.get('/blogs', blogController.adminBlogs);
// router.post('/blogs', upload.single('image'), blogController.createBlog);
// router.post('/blogs/:id', upload.single('image'), blogController.updateBlog);
// router.delete('/blogs/:id', blogController.deleteBlog);

// module.exports = router;