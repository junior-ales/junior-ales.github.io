var TIMEOUT = 10000;

var coverPageCommands = {
  expandDetails: function() {
    return this.click('@expandDetails').waitForElementVisible('@collapseDetails', TIMEOUT);
  },

  sendEmail: function(emailAddress, emailContent) {
    return this.
      setValue('@emailAddress', emailAddress).
      setValue('@emailContent', emailContent).
      click('@sendEmailButton');
  },

  assertOpacity: function(elem, value) {
    var self = this;
    return self.getCssProperty(elem, 'opacity', function(result) {
      self.assert.equal(parseFloat(result.value).toFixed(2), parseFloat(value));
    });
  },

  assertAlertMessage: function(message) {
    return this.
      waitForElementVisible('@alertBox', TIMEOUT).
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
