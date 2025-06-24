'use strict';
const nodemailer = require('nodemailer');
const setting = require('./env');
const test = require('./email');

// Make Ready Authentication
    let smtpConfig = {
        host: setting.host,
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
            user: setting.user, // generated ethereal user
            pass: setting.pass // generated ethereal password
        },
        tls: {
            // do not fail on invalid certs
            rejectUnauthorized: false
        }
    };

    // Create Transport
    exports.transporter = nodemailer.createTransport(smtpConfig);
    // verify connection configuration
    test.transporter.verify(function (error, success) {
        if (error) {
            console.log(error);
        } else {
            console.log("Server is ready to take our messages");
        }
    });