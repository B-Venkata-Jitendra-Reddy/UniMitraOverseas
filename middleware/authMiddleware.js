// const Admin = require('../models/Admin');

// const isAuthenticated = (req, res, next) => {
//     if (req.session.admin && req.session.admin.isLoggedIn) {
//         return next();
//     }
//     res.redirect('/admin/login');
// };

// const isAdmin = async (req, res, next) => {
//     if (req.session.admin && req.session.admin.isLoggedIn) {
//         const admin = await Admin.findById(req.session.admin.id);
//         if (admin) {
//             req.admin = admin;
//             return next();
//         }
//     }
//     res.redirect('/admin/login');
// };

// module.exports = { isAuthenticated, isAdmin };