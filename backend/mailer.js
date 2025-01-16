const nodemailer = require('nodemailer');

// Create a transporter for sending emails
const transporter = nodemailer.createTransport({
  service: 'gmail', // You can change the email service provider
  auth: {
    user: process.env.EMAIL_USER, // Use environment variables to store email credentials
    pass: process.env.EMAIL_PASS, // Use environment variables to store email credentials
  },
});

// Send an email
const sendEmail = (to, subject, text, html) => {
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to,
    subject,
    text,
    html,
  };

  return transporter.sendMail(mailOptions);
};

module.exports = { sendEmail };
