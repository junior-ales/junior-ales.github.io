'use strict';

var Tracker = require('./tracker');

function Notifier(page) {
  var tracker = new Tracker(window.mixpanel);

  this.success = function() {
    page.alertContentElem.innerHTML = 'Email Sent Successfuly';
    page.alertElem.style['background-color'] = 'rgb(48, 93, 84)';
    showMessage();
    tracker.track('coverpage:email-sender:success');
  };

  this.error = function(message) {
    page.alertContentElem.innerHTML = message || 'Oops! Something went wrong.<br>Please try again';
    page.alertElem.style['background-color'] = 'rgb(242, 105, 125)';
    showMessage();

    var eventTrack = 'coverpage:email-sender:failure:';
    message ?  eventTrack += 'fields' : eventTrack += 'exception';
    tracker.track(eventTrack);
  };

  function showMessage() {
    var ALERT_SHOW_DURATION = 5000;
    page.alertElem.style['z-index'] = 15;
    page.alertElem.style.opacity = 1;

    setTimeout(function() {
      page.alertElem.style.opacity = 0;
      page.alertElem.style['z-index'] = 0;
    }, ALERT_SHOW_DURATION);
  }
}

module.exports = Notifier;
