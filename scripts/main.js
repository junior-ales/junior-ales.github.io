function HomePage(document) {
  this.senderGotcha = document.getElementById('sender-gotcha');
  this.alertContentElem = document.getElementById('alert-content');
  this.alertElem = document.getElementById('alert-box');
  this.senderMessage = document.getElementById('sender-message');
  this.senderEmailButton = document.getElementById('send-email-button');
  this.senderEmail = document.getElementById('sender-email');
  this.emailMeSection = document.getElementById('email-me');
  this.emailLink = document.getElementById('email-link');
  this.titleElem = document.getElementById('title');
  this.socialMediaButtons = document.getElementById('social-media-buttons');
  this.footerElem = document.getElementById('main-footer');
  this.contentElem = document.getElementById('content');
  this.viewLessElem = document.getElementById('view-less');
  this.viewMoreElem = document.getElementById('view-more');
  this.largestDimension = (function() {
    var e = window, a = 'inner';
    if (!('innerWidth' in window )) {
      a = 'client';
      e = document.documentElement || document.body;
    }
    return e[ a+'Width' ] > e[ a+'Height' ] ? e[ a+'Width' ] : e[ a+'Height' ];
  })();
}


var showContent = function(page) {
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
};

var hideContent = function(page) {
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
};

var emailLinkClick = function(page) {
  showContent(page);

  setTimeout(function() {
    page.emailMeSection.scrollIntoView();
  }, 550);
};

var increaseOpacityViewLess = function(page) {
  page.viewLessElem.style.opacity = 1;
};

var decreaseOpacityViewLess = function(page) {
  page.viewLessElem.style.opacity = 0.2;
};

var sendEmail = function(page, e) {
  e.preventDefault();

  if (!page.senderMessage.value || !validEmail(page.senderEmail.value)) {
    showErrorMessage('Please add a valid email and a message');
    mixpanel.track('email fields error');
    return;
  }

  var data = encodeJson({
    message: page.senderMessage.value,
    _replyto: page.senderEmail.value,
    _subject: "New Message from Cover Page",
    _gotcha: page.senderGotcha.value
  });

  var request = new XMLHttpRequest();
  request.open('POST', '//formspree.io/edilson.ales.jr@gmail.com', true);
  request.setRequestHeader("Accept", "application/json, text/javascript, */*; q=0.01");
  request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
  request.onload = sendEmailHandler(request);
  try {
    request.send(data);
  } catch(error) {
    showErrorMessage();
    console.log(error);
    mixpanel.track('excepetion sending email');
  }

  function validEmail(emailAddress) {
    var re = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/i;
    return re.test(emailAddress);
  }

  function encodeJson(object) { // from http://blog.garstasio.com/you-dont-need-jquery/ajax/#url-encoding
    var encodedString = '';
    for (var prop in object) {
      if (object.hasOwnProperty(prop)) {
        if (encodedString.length > 0) {
          encodedString += '&';
        }
        encodedString += encodeURI(prop + '=' + object[prop]);
      }
    }
    return encodedString;
  }

  function sendEmailHandler(req) {
    return function() {
      if (req.status === 200) {
        page.senderEmail.value = '';
        page.senderMessage.value = '';
        showSuccessMessage();
      }
      else {
        showErrorMessage();
      }
    };
  }

  function showSuccessMessage() {
    page.alertContentElem.innerHTML = 'Email Sent Successfuly';
    page.alertElem.style['background-color'] = 'rgb(48, 93, 84)';
    showMessage();
  }

  function showErrorMessage(message) {
    page.alertContentElem.innerHTML = message || 'Oops! Something went wrong.<br>Please try again';
    page.alertElem.style['background-color'] = 'rgb(242, 105, 125)';
    showMessage();
  }

  function showMessage() {
    page.alertElem.style['z-index'] = 15;
    page.alertElem.style.opacity = 1;

    setTimeout(function() {
      page.alertElem.style.opacity = 0;
      page.alertElem.style['z-index'] = 0;
    }, 5000);
  }
};

var homePage = new HomePage(document);

homePage.contentElem.style['-webkit-transform'] = 'translateY('+ homePage.largestDimension + 'px)';
homePage.contentElem.style['-moz-transform'] = 'translateY('+ homePage.largestDimension + 'px)';
homePage.contentElem.style['-ms-transform'] = 'translateY('+ homePage.largestDimension + 'px)';
homePage.contentElem.style['-o-transform'] = 'translateY('+ homePage.largestDimension + 'px)';
homePage.contentElem.style.transform = 'translateY('+ homePage.largestDimension + 'px)';
setTimeout(function() {
  homePage.contentElem.style.visibility = 'visible';
}, 550);

function track(eventName, fn) {
  return function() {
    mixpanel.track(eventName);
    fn.apply(this, arguments);
  };
}

homePage.viewMoreElem.onclick = track('view more', showContent.bind(null, homePage));
homePage.viewLessElem.onclick = track('view less', hideContent.bind(null, homePage));
homePage.emailLink.onclick = track('email link', emailLinkClick.bind(null, homePage));
homePage.senderEmail.onfocus = decreaseOpacityViewLess.bind(null, homePage);
homePage.senderMessage.onfocus = decreaseOpacityViewLess.bind(null, homePage);
homePage.senderEmail.onblur = increaseOpacityViewLess.bind(null, homePage);
homePage.senderMessage.onblur = increaseOpacityViewLess.bind(null, homePage);
homePage.senderEmailButton.onclick = track('send email', sendEmail.bind(null, homePage));
