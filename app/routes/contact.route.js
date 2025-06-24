
var Joi = require('joi');
var request = require('request');
var mail = require('../config/email');
var setting = require('../config/env');

exports.send = function(req, res){
  var schema = Joi.object().keys({
      userName: Joi.string().required().error(new Error('Name Required')),
      email: Joi.string().required().email().error(new Error('Email is required')),
      subject: Joi.string().required().error(new Error('Subject is Required')),
      message: Joi.string().required().error(new Error('Message is Required')),
      captchaResponse: Joi.string().required().error(new Error('Please try again'))
  });

  var verificationUrl = "https://www.google.com/recaptcha/api/siteverify?secret=" + setting.Captcha_secretKey + "&response=" + req.body.captchaResponse + "&remoteip=" + req.connection.remoteAddress;

  request(verificationUrl, function (error, response, body) {

      body = JSON.parse(body);
      // Success will be true or false depending upon captcha validation.
      if (body.success !== undefined && !body.success) {
          return res.json({
              success: false,
              message: 'Failed captcha verification'
          });
      } else {
          Joi.validate(req.body, schema, function (err, value) {
              if (!err) {
                  let contact = req.body;

                  var mailOptions = {
                      from: contact.email, // sender address
                      to: setting.user, // list of receivers
                      subject: setting.sub, // Subject line
                      html: '<b>Enquiry from : </b>' + contact.email +
                          '<div><br><b>Contact Peron Name: : </b>' + contact.userName + '</div>' +
                          '<div><br><b>Subject : </b>' + contact.subject + '</div>' +
                          '<div><br><b>Message : </b>' + contact.message + '</div>'
                  };

                  // send mail with defined transport object
                  mail.transporter.sendMail(mailOptions, function (error, info) {
                      if (error) {
                          return console.log(error);
                      }
                      console.log('Message sent: ' + info.response);

                      return res.json({
                          success: true,
                          message: 'Message Sent Successfully'
                      });

                  });
              } else {
                  return res.json({
                      success: false,
                      message: err.message
                  });
              }
          });
      }
  });
};
