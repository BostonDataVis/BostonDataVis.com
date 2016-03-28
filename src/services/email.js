require('dotenv').config();

const AWS = require('aws-sdk');
const nodemailer = require('nodemailer');
const sesTransport = require('nodemailer-ses-transport');
const transport = nodemailer.createTransport(sesTransport({
  ses: new AWS.SES({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    region: process.env.AWS_DEFAULT_REGION
  })
}));

module.exports = transport;
