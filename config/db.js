// const mongoose = require('mongoose');

// const connectDB = async () => {
//     try {
//         await mongoose.connect(process.env.MONGODB_URI);
//         console.log('MongoDB Connected Successfully');
        
//         const Admin = require('../models/Admin');
//         const adminExists = await Admin.findOne({ username: process.env.ADMIN_USERNAME });
//         if (!adminExists) {
//             await Admin.create({
//                 username: process.env.ADMIN_USERNAME,
//                 password: process.env.ADMIN_PASSWORD
//             });
//             console.log('Default admin created');
//         }
//     } catch (error) {
//         console.error('MongoDB Connection Error:', error);
//         process.exit(1);
//     }
// };

// connectDB();

// module.exports = mongoose.connection;