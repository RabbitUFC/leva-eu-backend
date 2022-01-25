'use strict';
const nodemailer = require('nodemailer');

const {email} = require('../config');

async function sendEmail({html, to, subject}) {
  const transporter = nodemailer.createTransport({
    host: email.host,
    port: 587,
    secure: false,
    auth: {
      user: email.user,
      pass: email.password,
    },
  });

  // await transporter.verify();

  const info = await transporter.sendMail({
    from: '"LevaEu" <nao-responda@levaeu.com>',
    to,
    subject,
    html,
  });

  console.log('Message sent: %s', info.messageId);
  console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
}

export {sendEmail};
