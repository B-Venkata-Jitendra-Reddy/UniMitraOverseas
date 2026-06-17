const Contact = require('../models/Contact');
const emailService = require('../services/emailService');

// Simple validation helpers (could be moved to a middleware)
const validate = {
  name: (val) => val && val.trim().length > 0,
  email: (val) => /^\S+@\S+\.\S+$/.test(val),
  mobile: (val) => /^[0-9]{10}$/.test(val),
  country: (val) => ['United Kingdom', 'United States', 'Australia', 'Canada', 'Germany'].includes(val),
  course: (val) => val && val.trim().length > 0,
  message: (val) => val && val.trim().length > 0,
};

/**
 * Handle contact form submission (POST)
 */
exports.submitContactForm = async (req, res) => {
  try {
    const { name, email, mobile, preferredCountry, course, loanSavings, message } = req.body;

    // Run validations
    const errors = [];
    if (!validate.name(name)) errors.push('Full name is required');
    if (!validate.email(email)) errors.push('Valid email is required');
    if (!validate.mobile(mobile)) errors.push('10‑digit mobile number is required');
    if (!validate.country(preferredCountry)) errors.push('Please select a valid country');
    if (!validate.course(course)) errors.push('Course name is required');
    if (!validate.message(message)) errors.push('Message is required');

    if (errors.length > 0) {
      req.session.message = { type: 'error', text: errors.join('. ') };
      return res.redirect('/contact');
    }

    // Save to database
    const contact = new Contact({
      name: name.trim(),
      email: email.trim().toLowerCase(),
      mobile: mobile.trim(),
      preferredCountry,
      course: course.trim(),
      loanSavings: loanSavings || '',
      message: message.trim(),
    });
    await contact.save();

    // Send email (async, non‑blocking)
    emailService.sendContactNotification(contact).catch((err) => {
      console.error('Email error:', err);
    });

    req.session.message = { type: 'success', text: 'Thank you! Our counsellor will contact you within 24 hours.' };
    res.redirect('/contact');
  } catch (error) {
    console.error('Contact submission error:', error);
    req.session.message = { type: 'error', text: 'Something went wrong. Please try again later.' };
    res.redirect('/contact');
  }
};