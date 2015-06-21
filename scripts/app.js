(function(mixpanel, page) {
  var viewport = (function() {
    var e = window, a = 'inner';
    if (!('innerWidth' in window )) {
      a = 'client';
      e = document.documentElement || document.body;
    }
    return {
      largestDimension: function() {
        return e[ a+'Width' ] > e[ a+'Height' ] ? e[ a+'Width' ] : e[ a+'Height' ];
      }
    };
  })();

  var showContent = function() {
    page.socialMediaButtons.elem.style.display = 'none';
    document.getElementById('title').style.display = 'none';
    footerElem.style.display = 'none';
    contentElem.style.position = 'initial';
    contentElem.style['-webkit-transform'] = 'translateY(0)';
    contentElem.style['-moz-transform'] = 'translateY(0)';
    contentElem.style['-ms-transform'] = 'translateY(0)';
    contentElem.style['-o-transform'] = 'translateY(0)';
    contentElem.style.transform = 'translateY(0)';
    setTimeout(function() {
      viewLessElem.style.display = 'block';
    }, 550);
  };

  var hideContent = function() {
    page.socialMediaButtons.elem.style.display = null;
    document.getElementById('title').style.display = null;
    contentElem.style['-webkit-transform'] = 'translateY('+ viewport.largestDimension()+ 'px)';
    contentElem.style['-moz-transform'] = 'translateY('+ viewport.largestDimension()+ 'px)';
    contentElem.style['-ms-transform'] = 'translateY('+ viewport.largestDimension()+ 'px)';
    contentElem.style['-o-transform'] = 'translateY('+ viewport.largestDimension()+ 'px)';
    contentElem.style.transform = 'translateY('+ viewport.largestDimension()+ 'px)';
    contentElem.style.position = 'fixed';
    viewLessElem.style.display = 'none';
    footerElem.style.display = null;
  };

  var emailLinkClick = function() {
    showContent();

    setTimeout(function() {
      document.getElementById('email-me').scrollIntoView();
    }, 550);
  };

  var increaseOpacityViewLess = function() {
    document.getElementById('view-less').style.opacity = 1;
  };

  var decreaseOpacityViewLess = function() {
    document.getElementById('view-less').style.opacity = 0.2;
  };

  var sendEmail = function(e) {
    e.preventDefault();

    if (!senderMessage.value || !validEmail(senderEmail.value)) {
      showErrorMessage("Please add a valid email and a message");
      mixpanel.track('email fields error');
      return;
    }

    var data = encodeJson({
      message: senderMessage.value,
      _replyto: senderEmail.value,
      _subject: "New Message from Cover Page",
      _gotcha: document.getElementById('sender-gotcha').value
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
          senderEmail.value = '';
          senderMessage.value = '';
          showSuccessMessage();
        }
        else {
          showErrorMessage();
        }
      };
    }

    function showSuccessMessage() {
      alertContentElem.innerHTML = 'Email Sent Successfuly';
      alertElem.style['background-color'] = 'rgb(48, 93, 84)';
      showMessage();
    }

    function showErrorMessage(message) {
      alertContentElem.innerHTML = message || 'Oops! Something went wrong.<br>Please try again';
      alertElem.style['background-color'] = 'rgb(242, 105, 125)';
      showMessage();
    }

    function showMessage() {
      alertElem.style['z-index'] = 15;
      alertElem.style.opacity = 1;

      setTimeout(function() {
        alertElem.style.opacity = 0;
        alertElem.style['z-index'] = 0;
      }, 5000);
    }
  };

  var contentElem = document.getElementById('content');
  var footerElem = document.getElementById('main-footer');
  var viewMoreElem = document.getElementById('view-more');
  var viewLessElem = document.getElementById('view-less');
  var emailLink = document.getElementById('email-link');
  var senderEmail = document.getElementById('sender-email');
  var senderMessage = document.getElementById('sender-message');
  var senderEmailButton = document.getElementById('send-email-button');
  var alertElem = document.getElementById('alert-box');
  var alertContentElem = document.getElementById('alert-content');

  contentElem.style['-webkit-transform'] = 'translateY('+ viewport.largestDimension()+ 'px)';
  contentElem.style['-moz-transform'] = 'translateY('+ viewport.largestDimension()+ 'px)';
  contentElem.style['-ms-transform'] = 'translateY('+ viewport.largestDimension()+ 'px)';
  contentElem.style['-o-transform'] = 'translateY('+ viewport.largestDimension()+ 'px)';
  contentElem.style.transform = 'translateY('+ viewport.largestDimension()+ 'px)';
  setTimeout(function() {
    contentElem.style.visibility = 'visible';
  }, 550);

  function track(eventName, fn) {
    return function() {
      mixpanel.track(eventName);
      fn.apply(this, arguments);
    };
  }

  viewMoreElem.onclick = track('view more', showContent);
  viewLessElem.onclick = track('view less', hideContent);
  emailLink.onclick = track('email link', emailLinkClick);
  senderEmail.onfocus = decreaseOpacityViewLess;
  senderMessage.onfocus = decreaseOpacityViewLess;
  senderEmail.onblur = increaseOpacityViewLess;
  senderMessage.onblur = increaseOpacityViewLess;
  senderEmailButton.onclick = track('send email', sendEmail);
})(mixpanel, new HomePage());
