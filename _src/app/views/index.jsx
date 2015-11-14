'use strict';

var HomePage = require('./components/homePage');
var EmailSender = require('./components/emailSender');
var Tracker = require('./components/tracker');

function bindPageEvents(page, emailSender, tracker) {
  page.viewMoreElem.onclick = track('coverpage:expand-details', showContent);
  page.viewLessElem.onclick = track('coverpage:collapse-details', hideContent);
  page.emailLink.onclick = track('coverpage:header:email', emailLinkClick);
  page.senderEmail.onfocus = decreaseOpacityViewLess;
  page.senderMessage.onfocus = decreaseOpacityViewLess;
  page.senderEmail.onblur = increaseOpacityViewLess;
  page.senderMessage.onblur = increaseOpacityViewLess;
  page.senderEmailButton.onclick = track('coverpage:email-sender:send', emailSender.send);

  (function setTrackingRegularElems() {
    var elems = document.querySelectorAll("*[data-track-identifier]");
    tracker.trackElems(elems).as("coverpage:").andIds();
  })();

  function showContent() {
    page.socialMediaButtons.style.display = 'none';
    page.titleElem.style.display = 'none';
    page.footerElem.style.display = 'none';
    page.contentElem.style.position = 'initial';
    page.contentElem.style['-webkit-transform'] = 'translateY(0)';
    page.contentElem.style['-moz-transform'] = 'translateY(0)';
    page.contentElem.style['-ms-transform'] = 'translateY(0)';
    page.contentElem.style['-o-transform'] = 'translateY(0)';
    page.contentElem.style.transform = 'translateY(0)';
    setTimeout(function() {
      page.viewLessElem.style.display = 'block';
    }, 550);
  }

  function hideContent() {
    page.socialMediaButtons.style.display = null;
    page.titleElem.style.display = null;
    page.contentElem.style['-webkit-transform'] = 'translateY('+ page.largestDimension + 'px)';
    page.contentElem.style['-moz-transform'] = 'translateY('+ page.largestDimension + 'px)';
    page.contentElem.style['-ms-transform'] = 'translateY('+ page.largestDimension + 'px)';
    page.contentElem.style['-o-transform'] = 'translateY('+ page.largestDimension + 'px)';
    page.contentElem.style.transform = 'translateY('+ page.largestDimension + 'px)';
    page.contentElem.style.position = 'fixed';
    page.viewLessElem.style.display = 'none';
    page.footerElem.style.display = null;
  }

  function track(eventName, fn) {
    return function() {
      tracker.track(eventName);
      fn.apply(this, arguments);
    };
  }

  function emailLinkClick() {
    showContent();

    setTimeout(function() {
      page.emailMeSection.scrollIntoView();
    }, 550);
  }

  function increaseOpacityViewLess() {
    page.viewLessElem.style.opacity = 1;
  }

  function decreaseOpacityViewLess() {
    page.viewLessElem.style.opacity = 0.2;
  }
}

function initializeMainContent(page) {
  page.contentElem.style['-webkit-transform'] = 'translateY('+ page.largestDimension + 'px)';
  page.contentElem.style['-moz-transform'] = 'translateY('+ page.largestDimension + 'px)';
  page.contentElem.style['-ms-transform'] = 'translateY('+ page.largestDimension + 'px)';
  page.contentElem.style['-o-transform'] = 'translateY('+ page.largestDimension + 'px)';
  page.contentElem.style.transform = 'translateY('+ page.largestDimension + 'px)';
  setTimeout(function() {
    page.contentElem.style.visibility = 'visible';
  }, 550);
}

var app = {
  init: function() {
    document.addEventListener('DOMContentLoaded', function() {
      var homePage = new HomePage(document, window);
      var emailSender = new EmailSender(homePage);
      var tracker = new Tracker(window.mixpanel);
      bindPageEvents(homePage, emailSender, tracker);
      initializeMainContent(homePage);
      tracker.track("coverpage:visit");
    });
  }
};

module.exports = app;
