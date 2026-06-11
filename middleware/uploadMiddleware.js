// const multer = require('multer');
// const path = require('path');

// const storage = multer.diskStorage({
//     destination: function(req, file, cb) {
//         let folder = 'public/uploads/';
//         if (file.fieldname === 'logo') folder += 'universities/';
//         else if (file.fieldname === 'image') folder += 'blogs/';
//         else if (file.fieldname === 'resume') folder += 'resumes/';
//         else if (file.fieldname === 'passport') folder += 'passports/';
//         else folder += 'others/';
//         cb(null, folder);
//     },
//     filename: function(req, file, cb) {
//         const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
//         cb(null, uniqueSuffix + path.extname(file.originalname));
//     }
// });

// const fileFilter = (req, file, cb) => {
//     const allowedTypes = /jpeg|jpg|png|gif|pdf|doc|docx/;
//     const extname = allowedTypes.test(path.extname(file.originalname).toLowerCase());
//     const mimetype = allowedTypes.test(file.mimetype);
//     if (mimetype && extname) {
//         return cb(null, true);
//     } else {
//         cb(new Error('Only images and PDF/DOC files are allowed'));
//     }
// };

// const upload = multer({ 
//     storage: storage,
//     limits: { fileSize: 5 * 1024 * 1024 },
//     fileFilter: fileFilter
// });

// module.exports = upload;