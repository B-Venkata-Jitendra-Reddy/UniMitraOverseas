const express = require('express');
const session = require('express-session');
const path = require('path');
const dotenv = require('dotenv');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
// const mongoSanitize = require('express-mongo-sanitize');
const expressLayouts = require("express-ejs-layouts");

dotenv.config();

const app = express();

// Database connection
// require('./config/db');

// Security middleware
app.use(helmet());

// With this (allows DevTools during development)
app.use(helmet({
    contentSecurityPolicy: {
        directives: {
            defaultSrc: ["'self'"],
            frameSrc: ["'self'", "https://www.google.com"],   // Allow Google Maps iframe
            connectSrc: ["'self'", "https://www.google.com"],
            scriptSrc: ["'self'", "'unsafe-inline'", "'unsafe-eval'"],
            styleSrc: ["'self'", "'unsafe-inline'", "https://fonts.googleapis.com"],
            fontSrc: ["'self'", "https://fonts.gstatic.com", "https://cdnjs.cloudflare.com"],
            imgSrc: ["'self'", "data:", "https:"],
        },
    },
}));

// app.use(mongoSanitize());

// Rate limiting
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 100,
    message: 'Too many requests from this IP, please try again later.'
});
app.use('/api/', limiter);

// Session configuration
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
        secure: process.env.NODE_ENV === 'production',
        maxAge: 3600000,
        httpOnly: true
    }
}));

// Body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(expressLayouts);
app.set('layout', 'layouts/boilerplate');

// Static files
app.use(express.static(path.join(__dirname, 'public')));
app.use('/uploads', express.static(path.join(__dirname, 'public/uploads')));

// View engine setup
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Global variables middleware
app.use((req, res, next) => {
    res.locals.currentUser = req.session.admin || null;
    res.locals.siteUrl = process.env.SITE_URL;
    res.locals.currentYear = new Date().getFullYear();
    res.locals.gaId = process.env.GA_MEASUREMENT_ID;
    next();
});

// Routes
app.use('/', require('./routes/indexRoutes'));
// app.use('/universities', require('./routes/universityRoutes'));
// app.use('/scholarships', require('./routes/scholarshipRoutes'));
// app.use('/blogs', require('./routes/blogRoutes'));
// app.use('/lead', require('./routes/leadRoutes'));
// app.use('/admin', require('./routes/adminRoutes'));


// Error handler
// app.use((err, req, res, next) => {
//     console.error(err.stack);
//     res.status(500).render('error', { title: 'Server Error', message: err.message });
// });

// 404 Handler
app.use((req, res) => {
    res.status(404).render('404', { title: 'Page Not Found' });
});

const PORT = process.env.PORT || 2500;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    // console.log(`Admin panel: http://localhost:${PORT}/admin/login`);
});