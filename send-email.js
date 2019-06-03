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
  subject: `Automation Testing has finished`,
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

function generateHTML(report) {
  let passedWidth = report.statistic.passed / report.statistic.total * 100;

  return `<div>Duration: ${duration(report.time.duration)}</div>` +

  `<div>Results:</div>` +
    `<div style="position:relative;">` +
    `<table width="100%" style="height: 20px;"><tr><td style="width:${passedWidth}%; background-color: forestgreen;"></td>` +
    `${passedWidth < 100 ? `<td style="width:${100 - passedWidth}%; background-color: red;"></td>` : ``}`+
    `</tr></table>` +

    `<div style="position: relative;">` +
    `<table width="100%" border="1"><thead>` +
    `<tr align="center"><th>Total</th><th>Failed</th><th>Passed</th><th>Broken</th><th>Skipped</th><th>Unknown</th></tr>` +
    `</thead><tbody>` +
    `<tr align="center"><td>${report.statistic.total}</td><td>${report.statistic.failed}</td><td>${report.statistic.passed}</td>` +
    `<td>${report.statistic.broken}</td><td>${report.statistic.skipped}</td><td>${report.statistic.unknown}</td></tr>` +
    `</tbody></table></div>`
}

function duration(ms){
  let min = parseInt(ms / 60000);
  let sec = parseInt((ms % 60000) / 1000);
  return `${min} min ${sec} sec`

}
