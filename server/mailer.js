const nodemailer = require('nodemailer');

const { outlook } = require('../config/credentials');

const transporter = nodemailer.createTransport({
  service: 'outlook',
  // secure: false,
  // port: 587,
  auth: {
    user: outlook.user,
    pass: outlook.pass
  }
});


function sendEmail({ name, email, subject, body }) {
  const from = `${name} <${email}>`;
  const message = {
    from: outlook.user,
    to: outlook.user,
    subject: `${subject} from ${from}`,
    text: body,
    replyTo: from
  };

  return new Promise((resolve, reject) => {
    transporter.sendMail(message, (error, info) =>
      error ? reject(error) : resolve(info)
    );
  });
}

module.exports = sendEmail;