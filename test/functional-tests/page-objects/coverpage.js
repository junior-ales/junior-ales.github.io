var coverPageCommands = {
  expandDetails: function() {
    return this.click('@expandDetails').waitForElementVisible('@collapseDetails', 1000);
  },

  sendEmail: function(emailAddress, emailContent) {
    return this.
      setValue('@emailAddress', emailAddress).
      setValue('@emailContent', emailContent).
      click('@sendEmailButton');
  },

  assertAlertMessage: function(message) {
    return this.
      waitForElementVisible('@alertBox', 1000).
      assert.containsText('@alertContent', message);
  },

  assertEmailFieldsAreEmpty: function() {
    return this.
      assert.value('@emailAddress', '').
      assert.value('@emailContent', '');
  }
};

module.exports = {
  commands: [coverPageCommands],
  url: function() { return this.api.globals.envurl; },
  elements: {
    expandDetails: { selector: '#view-more' },
    collapseDetails: { selector: '#view-less' },
    emailAddress: { selector: '#sender-email' },
    emailContent: { selector: '#sender-message' },
    sendEmailButton: { selector: '#send-email-button' },
    alertBox: { selector: '#alert-box' },
    alertContent: { selector: '#alert-content' }
  }
};
