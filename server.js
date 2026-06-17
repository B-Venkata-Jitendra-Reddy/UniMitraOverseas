const express = require('express');
const session = require('express-session');
const mongoose = require('mongoose');
const path = require('path');
const dotenv = require('dotenv');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const compression = require('compression');
const expressLayouts = require("express-ejs-layouts");

dotenv.config();

const app = express();

// ---------- Database ----------
const db = require('./config/db');
db.connect();

// Security middleware
app.use(helmet());

// ---------- Security & Performance ----------
app.use(helmet({
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'"],
      frameSrc: ["'self'", "https://www.google.com"],
      connectSrc: ["'self'", "https://www.google.com"],
      scriptSrc: ["'self'", "'unsafe-inline'", "'unsafe-eval'"],
      styleSrc: ["'self'", "'unsafe-inline'", "https://fonts.googleapis.com"],
      fontSrc: ["'self'", "https://fonts.gstatic.com", "https://cdnjs.cloudflare.com"],
      imgSrc: ["'self'", "data:", "https:"],
    },
  },
}));

app.use(compression()); // compress responses

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  message: 'Too many requests, please try again later.',
});
app.use('/api/', limiter);

// ---------- Session ----------
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  cookie: {
    secure: process.env.NODE_ENV === 'production',
    maxAge: 3600000,
    httpOnly: true,
  },
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
app.use('/contact', require('./routes/contactRoutes'));
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