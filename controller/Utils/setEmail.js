
const nodemailer = require("nodemailer");

// async..await is not allowed in global scope, must use a wrapper
async function sendEmail(mailOptions) {
  // Generate test SMTP service account from ethereal.email

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    auth: {
      user: process.env.SMTP_USER, 
      pass: process.env.SMTP_PASS, 
    },
  });

  // send mail with defined transport object
  await transporter.sendMail({
    from: mailOptions.from,
    to: mailOptions.to,
    subject: mailOptions.subject,
    text: mailOptions.text,
    html:mailOptions.html, // html body
  });

  console.log("Message sent successfully");
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  
}

module.exports = sendEmail