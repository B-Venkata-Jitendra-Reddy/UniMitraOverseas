const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Student name is required'],
        trim: true,
        maxlength: [100, 'Name cannot exceed 100 characters']
    },
    email: {
        type: String,
        required: [true, 'Email address is required'],
        trim: true,
        lowercase: true,
        match: [/^\S+@\S+\.\S+$/, 'Please enter a valid email address']
    },
    mobile: {
        type: String,
        required: [true, 'Mobile number is required'],
        trim: true,
        match: [/^[0-9]{10}$/, 'Please enter a valid 10-digit mobile number']
    },
    preferredCountry: {
        type: String,
        required: [true, 'Preferred country is required'],
        enum: ['United Kingdom', 'United States', 'Australia', 'Canada', 'Germany']
    },
    course: {
        type: String,
        required: [true, 'Course interested in is required'],
        trim: true,
        maxlength: [100, 'Course name cannot exceed 100 characters']
    },
    loanSavings: {
        type: String,
        enum: ['Education Loan', 'Personal Savings', 'Scholarship', 'Sponsorship', 'Not Sure', ''],
        default: ''
    },
    message: {
        type: String,
        required: [true, 'Message is required'],
        trim: true,
        maxlength: [500, 'Message cannot exceed 500 characters']
    },
    status: {
        type: String,
        enum: ['new', 'read', 'replied', 'archived'],
        default: 'new'
    }
}, {
    timestamps: true // automatically adds createdAt and updatedAt
});

// Index for faster queries
contactSchema.index({ createdAt: -1 });
contactSchema.index({ status: 1 });

module.exports = mongoose.model('Contact', contactSchema);