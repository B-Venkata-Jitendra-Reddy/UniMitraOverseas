// const Admin = require('../models/Admin');
// const Lead = require('../models/Lead');
// const University = require('../models/University');
// const Scholarship = require('../models/Scholarship');
// const Blog = require('../models/Blog');
// const Application = require('../models/Application');
// const ExcelJS = require('exceljs');

// exports.loginPage = (req, res) => {
//     res.render('admin/login', { title: 'Admin Login', error: null });
// };

// exports.login = async (req, res) => {
//     const { username, password } = req.body;
//     const admin = await Admin.findOne({ username });
//     if (admin && await admin.comparePassword(password)) {
//         req.session.admin = { id: admin._id, username: admin.username, isLoggedIn: true };
//         return res.redirect('/admin/dashboard');
//     }
//     res.render('admin/login', { title: 'Admin Login', error: 'Invalid credentials' });
// };

// exports.logout = (req, res) => {
//     req.session.destroy();
//     res.redirect('/admin/login');
// };

// exports.dashboard = async (req, res) => {
//     const stats = {
//         totalLeads: await Lead.countDocuments(),
//         totalUniversities: await University.countDocuments(),
//         totalScholarships: await Scholarship.countDocuments(),
//         totalBlogs: await Blog.countDocuments(),
//         totalApplications: await Application.countDocuments(),
//         recentLeads: await Lead.find().sort('-createdAt').limit(5)
//     };
//     res.render('admin/dashboard', { title: 'Admin Dashboard', stats });
// };

// exports.exportLeads = async (req, res) => {
//     const leads = await Lead.find().sort('-createdAt');
//     const workbook = new ExcelJS.Workbook();
//     const worksheet = workbook.addWorksheet('Leads');
    
//     worksheet.columns = [
//         { header: 'S.No', key: 'sno', width: 10 },
//         { header: 'Name', key: 'name', width: 25 },
//         { header: 'Mobile', key: 'mobile', width: 15 },
//         { header: 'Email', key: 'email', width: 30 },
//         { header: 'Qualification', key: 'qualification', width: 20 },
//         { header: 'Preferred Country', key: 'country', width: 20 },
//         { header: 'Lead Type', key: 'leadType', width: 15 },
//         { header: 'Created At', key: 'createdAt', width: 20 }
//     ];
    
//     leads.forEach((lead, index) => {
//         worksheet.addRow({
//             sno: index + 1,
//             name: lead.name,
//             mobile: lead.mobile,
//             email: lead.email,
//             qualification: lead.qualification,
//             country: lead.preferredCountry,
//             leadType: lead.leadType,
//             createdAt: lead.createdAt.toLocaleDateString()
//         });
//     });
    
//     res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
//     res.setHeader('Content-Disposition', 'attachment; filename=leads.xlsx');
//     await workbook.xlsx.write(res);
//     res.end();
// };