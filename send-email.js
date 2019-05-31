let nodemailer = require('nodemailer');
let emails = require('./config/emails');
let gmail = require('./config/gmail');
let report = require('./allure-report/widgets/summary.json');

function generateHTML(report) {
  let passedWidth = report.statistic.passed / report.statistic.total * 100;
  let failedWidth = (report.statistic.failed + report.statistic.passed) / report.statistic.total * 100;

  return `<hr color="red" align=left  size=10 width="${failedWidth}%" noshade>` +
    `<hr color="green" align=left  size=10 width="${passedWidth}%" noshade>` +

    `<table width="100%" border="1"><thead>` +
    `<tr align="center"><th>Total</th><th>Failed</th><th>Passed</th><th>Broken</th><th>Skipped</th><th>Unknown</th></tr>` +
    `</thead><tbody>` +
    `<tr align="center"><td>${report.statistic.total}</td><td>${report.statistic.failed}</td><td>${report.statistic.passed}</td>` +
    `<td>${report.statistic.broken}</td><td>${report.statistic.skipped}</td><td>${report.statistic.unknown}</td></tr>` +
    `</tbody></table>`
}

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
  html: generateHTML(report)
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