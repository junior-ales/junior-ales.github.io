module.exports = {
  'Send Email Successfully' : function (browser) {
    var coverpage = browser.page.coverpage();

    coverpage.
      navigate().
      expandDetails().
      sendEmail('email@test.com', 'an email content').
      assertAlertMessage('Email Sent Successfuly').
      assertEmailFieldsAreEmpty();

    browser.end();
  },

  'Send Email Failure' : function (browser) {
    var coverpage = browser.page.coverpage();

    coverpage.
      navigate().
      expandDetails().
      sendEmail().
      assertAlertMessage('Please add a valid email and a message').
      sendEmail('INVALID EMAIL ADDRESS', 'an email content').
      assertAlertMessage('Please add a valid email and a message');

    browser.end();
  },

  'Transparentize View Less Button When Writing Email' : function (browser) {
    var coverpage = browser.page.coverpage();

    coverpage.
      navigate().
      expandDetails().
      assert.cssProperty('@collapseDetails', 'opacity', '1').
      click('@emailAddress').
      assert.cssProperty('@collapseDetails', 'opacity', '0.2').
      click('@emailContent').
      assert.cssProperty('@collapseDetails', 'opacity', '0.2').
      click('@sendEmailButton').
      assert.cssProperty('@collapseDetails', 'opacity', '1');

    browser.end();
  }
};
