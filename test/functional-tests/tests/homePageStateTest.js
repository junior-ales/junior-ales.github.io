module.exports = {
  'Hide Email Link in Small Screens' : function (browser) {
    var coverpage = browser.page.coverpage();

    browser.maximizeWindow();
    coverpage.navigate().assert.visible('@emailHeaderLink');

    browser.resizeWindow(320, 480);
    browser.pause(500);
    coverpage.navigate().assert.hidden('@emailHeaderLink');

    browser.end();
  },

  'Expand and Collapse Details' : function(browser) {
    var coverpage = browser.page.coverpage();
    coverpage.
      navigate().
      expandDetails().
      collapseDetails();

    browser.end();
  }
};

