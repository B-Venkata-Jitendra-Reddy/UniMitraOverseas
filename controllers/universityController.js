// const University = require('../models/University');

// exports.listUniversities = async (req, res) => {
//     try {
//         const { country, course, search } = req.query;
//         let query = {};
//         if (country) query.country = country;
//         if (search) query.name = { $regex: search, $options: 'i' };
//         if (course) query.courses = { $in: [course] };
        
//         const universities = await University.find(query).sort('name');
//         const countries = [...new Set(await University.distinct('country'))];
        
//         res.render('universities', { title: 'Partner Universities', universities, countries, filters: { country, search, course } });
//     } catch (error) {
//         res.status(500).send('Server Error');
//     }
// };

// exports.universityDetails = async (req, res) => {
//     try {
//         const university = await University.findById(req.params.id);
//         if (!university) return res.status(404).render('404', { title: 'Not Found' });
//         res.render('university-details', { title: university.name, university });
//     } catch (error) {
//         res.status(500).send('Server Error');
//     }
// };

// // Admin Controllers
// exports.adminUniversities = async (req, res) => {
//     const universities = await University.find().sort('-createdAt');
//     res.render('admin/universities', { title: 'Manage Universities', universities });
// };

// exports.createUniversity = async (req, res) => {
//     try {
//         const universityData = { ...req.body, courses: req.body.courses.split(',').map(c => c.trim()) };
//         if (req.file) universityData.logo = req.file.path.replace('public/', '');
//         await University.create(universityData);
//         req.session.message = { type: 'success', text: 'University added successfully!' };
//         res.redirect('/admin/universities');
//     } catch (error) {
//         req.session.message = { type: 'error', text: error.message };
//         res.redirect('/admin/universities');
//     }
// };

// exports.updateUniversity = async (req, res) => {
//     try {
//         const updateData = { ...req.body, courses: req.body.courses.split(',').map(c => c.trim()) };
//         if (req.file) updateData.logo = req.file.path.replace('public/', '');
//         await University.findByIdAndUpdate(req.params.id, updateData);
//         req.session.message = { type: 'success', text: 'University updated!' };
//         res.redirect('/admin/universities');
//     } catch (error) {
//         req.session.message = { type: 'error', text: error.message };
//         res.redirect('/admin/universities');
//     }
// };

// exports.deleteUniversity = async (req, res) => {
//     await University.findByIdAndDelete(req.params.id);
//     res.json({ success: true });
// };