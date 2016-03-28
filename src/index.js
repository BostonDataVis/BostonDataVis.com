const express = require('express');

const ses = require('./services/email');

const app = express();

console.log(process.env);

app.use(function (req, res, next) {
  ses.sendMail({
    from: 'admin@bocoup.com',
    to: 'tyler@bocoup.com',
    subject: 'testing 123',
    text: 'testing 123'
  }, function (err, data) {
    if (err) {
      return res.send(err);
    }
    return res.send(data);
  });
});

module.exports = app;
