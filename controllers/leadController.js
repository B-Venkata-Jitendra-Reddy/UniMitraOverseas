// const Lead = require('../models/Lead');
// const nodemailer = require('nodemailer');

// const transporter = nodemailer.createTransport({
//     host: process.env.EMAIL_HOST,
//     port: process.env.EMAIL_PORT,
//     secure: false,
//     auth: {
//         user: process.env.EMAIL_USER,
//         pass: process.env.EMAIL_PASS
//     }
// });

// exports.submitLead = async (req, res) => {
//     try {
//         const { name, mobile, email, qualification, preferredCountry, preferredCourse, intake, leadType, message } = req.body;
        
//         const lead = await Lead.create({
//             name, mobile, email, qualification, preferredCountry, preferredCourse, intake,
//             leadType: leadType || 'general',
//             message
//         });

//         // Send email to admin
//         await transporter.sendMail({
//             from: process.env.EMAIL_USER,
//             to: process.env.EMAIL_USER,
//             subject: 'New Lead - Uni Mitra Overseas',
//             html: `<h3>New Lead Details</h3>
//                    <p><strong>Name:</strong> ${name}</p>
//                    <p><strong>Mobile:</strong> ${mobile}</p>
//                    <p><strong>Email:</strong> ${email}</p>
//                    <p><strong>Preferred Country:</strong> ${preferredCountry || 'N/A'}</p>
//                    <p><strong>Intake:</strong> ${intake || 'N/A'}</p>`
//         });

//         req.session.message = { type: 'success', text: 'Thank you! Our counsellor will contact you shortly.' };
//         res.redirect(req.get('referer') || '/');
//     } catch (error) {
//         console.error(error);
//         req.session.message = { type: 'error', text: 'Something went wrong. Please try again.' };
//         res.redirect(req.get('referer') || '/');
//     }
// };

// exports.submitScholarshipLead = async (req, res) => {
//     try {
//         const { name, email, phone, qualification, preferredCountry } = req.body;
//         await Lead.create({
//             name, mobile: phone, email, qualification, preferredCountry,
//             leadType: 'scholarship'
//         });
//         req.session.message = { type: 'success', text: 'Scholarship inquiry submitted successfully!' };
//         res.redirect('/scholarships');
//     } catch (error) {
//         req.session.message = { type: 'error', text: 'Submission failed. Please try again.' };
//         res.redirect('/scholarships');
//     }
// };

// exports.getAllLeads = async (req, res) => {
//     const leads = await Lead.find().sort('-createdAt');
//     res.render('admin/leads', { title: 'Leads Management', leads });
// };