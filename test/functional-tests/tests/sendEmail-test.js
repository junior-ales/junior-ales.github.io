module.exports = {
  'Send Email Successfully' : function (browser) {
    browser
      .url('http://localhost:3000')
      .waitForElementVisible('body', 1000)
      .click('#view-more')
      .waitForElementVisible('#view-less', 1000)
      .setValue('#sender-email', 'email@test.com')
      .setValue('#sender-message', 'an email content')
      .click('#send-email-button')
      .waitForElementVisible('#alert-box', 1000)
      .assert.containsText('#alert-content', 'Email Sent Successfuly')
      .assert.value('#sender-email', '')
      .assert.value('#sender-message', '')
      .end();
  },

  'Send Email Failure' : function (browser) {
    browser
      .url('http://localhost:3000')
      .waitForElementVisible('body', 1000)
      .click('#view-more')
      .waitForElementVisible('#view-less', 1000)
      .click('#send-email-button')
      .waitForElementVisible('#alert-box', 1000)
      .assert.containsText('#alert-content', 'Please add a valid email and a message')
      .setValue('#sender-email', 'INVALID EMAIL ADDRESS')
      .setValue('#sender-message', 'an email content')
      .click('#send-email-button')
      .assert.containsText('#alert-content', 'Please add a valid email and a message')
      .end();
  },

  'Transparentize View Less Button When Writing Email' : function (browser) {
    browser
      .url('http://localhost:3000')
      .waitForElementVisible('body', 1000)
      .click('#view-more')
      .waitForElementVisible('#view-less', 1000)
      .assert.cssProperty('#view-less', 'opacity', '1')
      .click('#sender-email')
      .assert.cssProperty('#view-less', 'opacity', '0.2')
      .click('#sender-message')
      .assert.cssProperty('#view-less', 'opacity', '0.2')
      .click('#send-email-button')
      .assert.cssProperty('#view-less', 'opacity', '1')
      .end();
  }
};
