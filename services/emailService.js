const { Resend } = require('resend');

// Initialize Resend with API key
const resend = new Resend(process.env.RESEND_API_KEY);

const FROM_EMAIL = process.env.RESEND_FROM_EMAIL || 'onboarding@resend.dev';
const ADMIN_EMAIL = process.env.EMAIL_USER; // fallback to the old email variable

/**
 * Send a contact notification email to both admin and the user
 * @param {Object} contact - The contact document from DB
 */
async function sendContactNotification(contact) {
  // 1. Email to the admin (Uni Mitra team)
  const adminHtml = `
    <h2>New Contact Enquiry</h2>
    <table style="border-collapse: collapse; width: 100%;">
      <tr><td><strong>Name</strong></td><td>${contact.name}</td></tr>
      <tr><td><strong>Email</strong></td><td>${contact.email}</td></tr>
      <tr><td><strong>Mobile</strong></td><td>${contact.mobile}</td></tr>
      <tr><td><strong>Preferred Country</strong></td><td>${contact.preferredCountry}</td></tr>
      <tr><td><strong>Course Interested</strong></td><td>${contact.course}</td></tr>
      <tr><td><strong>Loan/Savings</strong></td><td>${contact.loanSavings || 'Not specified'}</td></tr>
      <tr><td><strong>Message</strong></td><td>${contact.message}</td></tr>
    </table>
    <p><small>Received: ${new Date(contact.createdAt).toLocaleString()}</small></p>
  `;

  const adminEmailPromise = resend.emails.send({
    from: FROM_EMAIL,
    to: ADMIN_EMAIL,
    subject: `New Contact Enquiry from ${contact.name}`,
    html: adminHtml,
  });

  // 2. Confirmation email to the user
  const userHtml = `
    <h2>Thank You for Contacting Uni Mitra Overseas</h2>
    <p>Dear ${contact.name},</p>
    <p>We have received your enquiry regarding studying in <strong>${contact.preferredCountry}</strong> for the <strong>${contact.course}</strong> program.</p>
    <p>Our counsellor will reach out to you within 24 hours at <strong>${contact.mobile}</strong> or <strong>${contact.email}</strong> to discuss your study abroad plans.</p>
    <p>In the meantime, feel free to explore our website for more information about universities, scholarships, and visa processes.</p>
    <br>
    <p>Warm regards,<br>Uni Mitra Overseas Team</p>
  `;

  const userEmailPromise = resend.emails.send({
    from: FROM_EMAIL,
    to: contact.email,
    subject: 'We’ve Received Your Enquiry – Uni Mitra Overseas',
    html: userHtml,
  });

  // Send both emails in parallel
  await Promise.all([adminEmailPromise, userEmailPromise]);
}

module.exports = { sendContactNotification };