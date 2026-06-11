// const mongoose = require('mongoose');
// const slugify = require('slugify');

// const blogSchema = new mongoose.Schema({
//     title: { type: String, required: true },
//     slug: { type: String, unique: true },
//     image: { type: String },
//     category: { type: String, enum: ['Visa Updates', 'University News', 'Scholarships', 'Study Abroad Tips'], required: true },
//     content: { type: String, required: true },
//     excerpt: { type: String },
//     author: { type: String, default: 'Uni Mitra Team' },
//     views: { type: Number, default: 0 },
//     createdAt: { type: Date, default: Date.now }
// });

// blogSchema.pre('save', function(next) {
//     if (!this.slug) {
//         this.slug = slugify(this.title, { lower: true, strict: true });
//     }
//     next();
// });

// module.exports = mongoose.model('Blog', blogSchema);