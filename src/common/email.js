'use strict';
const nodemailer = require('nodemailer');

const {email} = require('../config');

async function sendEmail({html, to, subject}) {
  // const testAccount = await nodemailer.createTestAccount();
  const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    secure: false,
    auth: {
      user: email.user,
      pass: email.pass,
    },
  });
  const info = await transporter.sendMail({
    from: '"LevaEu" <no-reply@levaeu.com.br>',
    to,
    subject,
    html,
  });

  console.log('Message sent: %s', info.messageId);
  console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
}

export {sendEmail};
