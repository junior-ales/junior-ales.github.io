'use strict';

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
    var smallScreenWidth = 320;
    var smallScreenHeight = 480;
    var resizingDelay = 500;

    browser.maximizeWindow();
    coverpage.assert.visible('@emailHeaderLink');

    browser.resizeWindow(smallScreenWidth, smallScreenHeight);
    browser.pause(resizingDelay);
    coverpage.assert.hidden('@emailHeaderLink');

    browser.end();
  }
};

