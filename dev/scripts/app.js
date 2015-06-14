(function() {
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
    document.getElementById('social-media-buttons').style.display = 'none';
    document.getElementById('title').style.display = 'none';
    viewMoreElem.style.display = 'none';
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
    document.getElementById('social-media-buttons').style.display = null;
    document.getElementById('title').style.display = null;
    contentElem.style['-webkit-transform'] = 'translateY('+ viewport.largestDimension()+ 'px)';
    contentElem.style['-moz-transform'] = 'translateY('+ viewport.largestDimension()+ 'px)';
    contentElem.style['-ms-transform'] = 'translateY('+ viewport.largestDimension()+ 'px)';
    contentElem.style['-o-transform'] = 'translateY('+ viewport.largestDimension()+ 'px)';
    contentElem.style.transform = 'translateY('+ viewport.largestDimension()+ 'px)';
    contentElem.style.position = 'fixed';
    viewLessElem.style.display = 'none';
    viewMoreElem.style.display = null;
  };

  var emailLinkClick = function() { showContent();
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
    if (!senderMessage.value || !senderEmail.value) return;

    e.preventDefault();

    function encodeJson(object) { // copied from http://blog.garstasio.com/you-dont-need-jquery/ajax/#url-encoding
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
        if (req.status === 200 && req.responseText.success) {
          console.log("e foi meso");
        }
      };
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
    request.send(data);
  };

  var contentElem = document.getElementById('content');
  var viewMoreElem = document.getElementById('view-more');
  var viewLessElem = document.getElementById('view-less');
  var emailLink = document.getElementById('email-link');
  var senderEmail = document.getElementById('sender-email');
  var senderMessage = document.getElementById('sender-message');
  var senderEmailButton = document.getElementById('send-email-button');

  contentElem.style['-webkit-transform'] = 'translateY('+ viewport.largestDimension()+ 'px)';
  contentElem.style['-moz-transform'] = 'translateY('+ viewport.largestDimension()+ 'px)';
  contentElem.style['-ms-transform'] = 'translateY('+ viewport.largestDimension()+ 'px)';
  contentElem.style['-o-transform'] = 'translateY('+ viewport.largestDimension()+ 'px)';
  contentElem.style.transform = 'translateY('+ viewport.largestDimension()+ 'px)';
  setTimeout(function() {
    contentElem.style.visibility = 'visible';
  }, 550);

  viewMoreElem.onclick = showContent;
  viewLessElem.onclick = hideContent;
  emailLink.onclick = emailLinkClick;
  senderEmail.onfocus = decreaseOpacityViewLess;
  senderMessage.onfocus = decreaseOpacityViewLess;
  senderEmail.onblur = increaseOpacityViewLess;
  senderMessage.onblur = increaseOpacityViewLess;
  senderEmailButton.onclick = sendEmail;
})();
