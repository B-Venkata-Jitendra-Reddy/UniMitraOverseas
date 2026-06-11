// const Scholarship = require('../models/Scholarship');

// exports.listScholarships = async (req, res) => {
//     const { country } = req.query;
//     let query = {};
//     if (country) query.country = country;
//     const scholarships = await Scholarship.find(query).sort('-createdAt');
//     const countries = [...new Set(await Scholarship.distinct('country'))];
//     res.render('scholarships', { title: 'Scholarships', scholarships, countries, selectedCountry: country });
// };

// // Admin Controllers
// exports.adminScholarships = async (req, res) => {
//     const scholarships = await Scholarship.find().sort('-createdAt');
//     res.render('admin/scholarships', { title: 'Manage Scholarships', scholarships });
// };

// exports.createScholarship = async (req, res) => {
//     await Scholarship.create(req.body);
//     res.redirect('/admin/scholarships');
// };

// exports.updateScholarship = async (req, res) => {
//     await Scholarship.findByIdAndUpdate(req.params.id, req.body);
//     res.redirect('/admin/scholarships');
// };

// exports.deleteScholarship = async (req, res) => {
//     await Scholarship.findByIdAndDelete(req.params.id);
//     res.json({ success: true });
// };