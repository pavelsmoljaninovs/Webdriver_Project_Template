let nodemailer = require('nodemailer');
let emails = require('./config/emails');
let gmail = require('./config/gmail');
let report = require('./allure-report/widgets/summary.json');

let transporter = nodemailer.createTransport({
  pool: true,
  host: gmail.host,
  port: gmail.port,
  secure: true,
  auth: {
    user: gmail.email,
    pass: gmail.pass
  }
});

let mailOptions = {
  from: 'react.bug.tracker@gmail.com',
  to: emails.join(', '),
  subject: 'Automation Testing has finished',
  html: `<div>Passed: ${report.statistic.passed}</div>` +
    `<div>Failed: ${report.statistic.failed}</div>`
};

transporter.sendMail(mailOptions, function (error, info) {
  if (error) {
    console.log('Error: ', error);
    process.exit();
  } else {
    console.log('Email sent');
    process.exit();
  }
});