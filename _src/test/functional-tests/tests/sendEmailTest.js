'use strict';

module.exports = {
  'Transparentize Collapse Details Button' : function (browser) {
    var coverpage = browser.page.coverpage();

    coverpage.
      navigate().
      expandDetails().
      assertOpacity('@collapseDetails', '1').
      click('@emailContent').
      assertOpacity('@collapseDetails', '0.2').  // thanks to safari I can't use assert.cssProperty('opacity', '0.2')
      click('@sendEmailButton').
      assertOpacity('@collapseDetails', '1');
  },

  'Send Email Successfully' : function (browser) {
    var coverpage = browser.page.coverpage();

    coverpage.
      navigate().
      expandDetails().
      sendEmail('email@test.com', 'an email content').
      assertAlertMessage('Email Sent Successfuly').
      assertEmailFieldsAreEmpty();
  },

  'Send Email Failure' : function (browser) {
    var coverpage = browser.page.coverpage();

    coverpage.
      sendEmail().
      assertAlertMessage('Please add a valid email and a message').
      sendEmail('INVALID EMAIL ADDRESS', 'an email content').
      assertAlertMessage('Please add a valid email and a message');

    browser.end();
  }
};
