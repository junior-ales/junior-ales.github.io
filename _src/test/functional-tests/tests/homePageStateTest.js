module.exports = {
  'Expand and Collapse Details' : function(browser) {
    var coverpage = browser.page.coverpage();
    coverpage.
      navigate().
      expandDetails().
      collapseDetails();
  },

  'Hide Email Link in Small Screens' : function (browser) {
    var coverpage = browser.page.coverpage();

    browser.maximizeWindow();
    coverpage.assert.visible('@emailHeaderLink');

    browser.resizeWindow(320, 480);
    browser.pause(500);
    coverpage.assert.hidden('@emailHeaderLink');

    browser.end();
  }
};

