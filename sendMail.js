var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'vivekkr5252@gmail.com',
    pass: 'viva_143changed'
  }
});

var mailOptions = {
  from: 'vivekkr5252@gmail.com',
  to: 'vivekkr2525@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});