// const Blog = require('../models/Blog');

// exports.listBlogs = async (req, res) => {
//     const { category, search } = req.query;
//     let query = {};
//     if (category) query.category = category;
//     if (search) query.title = { $regex: search, $options: 'i' };
    
//     const blogs = await Blog.find(query).sort('-createdAt');
//     const categories = ['Visa Updates', 'University News', 'Scholarships', 'Study Abroad Tips'];
//     const recentPosts = await Blog.find().sort('-createdAt').limit(5);
    
//     res.render('blogs', { title: 'Blog & News', blogs, categories, recentPosts, currentCategory: category, search });
// };

// exports.blogDetails = async (req, res) => {
//     const blog = await Blog.findOne({ slug: req.params.slug });
//     if (!blog) return res.status(404).render('404', { title: 'Not Found' });
//     blog.views += 1;
//     await blog.save();
//     const recentPosts = await Blog.find({ _id: { $ne: blog._id } }).sort('-createdAt').limit(5);
//     res.render('blog-details', { title: blog.title, blog, recentPosts });
// };

// // Admin Controllers
// exports.adminBlogs = async (req, res) => {
//     const blogs = await Blog.find().sort('-createdAt');
//     res.render('admin/blogs', { title: 'Manage Blogs', blogs });
// };

// exports.createBlog = async (req, res) => {
//     try {
//         const blogData = req.body;
//         if (req.file) blogData.image = req.file.path.replace('public/', '');
//         await Blog.create(blogData);
//         req.session.message = { type: 'success', text: 'Blog published!' };
//         res.redirect('/admin/blogs');
//     } catch (error) {
//         req.session.message = { type: 'error', text: error.message };
//         res.redirect('/admin/blogs');
//     }
// };

// exports.updateBlog = async (req, res) => {
//     const updateData = req.body;
//     if (req.file) updateData.image = req.file.path.replace('public/', '');
//     await Blog.findByIdAndUpdate(req.params.id, updateData);
//     res.redirect('/admin/blogs');
// };

// exports.deleteBlog = async (req, res) => {
//     await Blog.findByIdAndDelete(req.params.id);
//     res.json({ success: true });
// };