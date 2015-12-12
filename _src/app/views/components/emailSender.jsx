'use strict';

var Notifier = require('./notifier');

function EmailSender(page) {
  var notify = new Notifier(page);

  this.send = function(e) {
    e.preventDefault();

    if (!page.senderMessage.value || !validEmail(page.senderEmail.value)) {
      notify.error('Please add a valid email and a message');
      return;
    }

    var data = encodeJson({
      message: page.senderMessage.value,
      _replyto: page.senderEmail.value,
      _subject: 'New Message from Cover Page',
      _gotcha: page.senderGotcha.value
    });

    var request = new XMLHttpRequest();
    request.open('POST', '//formspree.io/edilson.ales.jr@gmail.com', true);
    request.setRequestHeader('Accept', 'application/json, text/javascript, */*; q=0.01');
    request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
    request.onload = sendEmailHandler(request);
    try {
      request.send(data);
    } catch(error) {
      notify.error();
      console.log(error);
    }
  };

  function encodeJson(object) { // from http://blog.garstasio.com/you-dont-need-jquery/ajax/#url-encoding
    var encodedString = '';
    for (var prop in object) {
      if (object.hasOwnProperty(prop)) {
        if (encodedString.length > 0) {
          encodedString += '&';
        }
        encodedString += encodeURI(prop + '=' + object[prop]);
      }
    }
    return encodedString;
  }

  function validEmail(emailAddress) {
    var re = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/i;
    return re.test(emailAddress);
  }

  function sendEmailHandler(req) {
    var OK = 200;
    return function() {
      if (req.status === OK) {
        page.senderEmail.value = '';
        page.senderMessage.value = '';
        notify.success();
      } else {
        notify.error();
      }
    };
  }
}

module.exports = EmailSender;
