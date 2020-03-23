import nodemailer from 'nodemailer';

import { outlook } from '../../config/credentials';

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


export default async (req, res) => {
  if (req.method === 'POST') {
    const maildata = req.body;
    console.log(maildata);

    try {
      let response = await sendEmail(req.body);
      console.log('==== SUCCESS: ', response);
      res.status(200).send('success');
    } catch (error) {
      console.error('==== FAILURE: ', error);
      res.status(500).send('The server was unable to send the message.');
    }
  }
};