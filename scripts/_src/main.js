document.addEventListener('DOMContentLoaded', function() {
  var homePage = new HomePage(document, window);
  var emailSender = new EmailSender(homePage);
  bindPageEvents(homePage, emailSender);
  initializeMainContent(homePage);
  mixpanel.track('cover page visit');
});

function bindPageEvents(page, emailSender) {
  page.viewMoreElem.onclick = track('view more', showContent);
  page.viewLessElem.onclick = track('view less', hideContent);
  page.emailLink.onclick = track('email link', emailLinkClick);
  page.senderEmail.onfocus = decreaseOpacityViewLess;
  page.senderMessage.onfocus = decreaseOpacityViewLess;
  page.senderEmail.onblur = increaseOpacityViewLess;
  page.senderMessage.onblur = increaseOpacityViewLess;
  page.senderEmailButton.onclick = track('send email', emailSender.send);

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
      mixpanel.track(eventName);
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
