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
    contentElem.style.transform = 'translateY(0)';
    setTimeout(function() {
      viewLessElem.style.display = 'block';
    }, 550);
  };

  var hideContent = function() {
    document.getElementById('social-media-buttons').style.display = null;
    document.getElementById('title').style.display = null;
    contentElem.style['-webkit-transform'] = 'translateY('+ viewport.largestDimension()+ 'px)';
    contentElem.style.transform = 'translateY('+ viewport.largestDimension()+ 'px)';
    contentElem.style.position = 'fixed';
    viewLessElem.style.display = 'none';
    viewMoreElem.style.display = null;
  };

  var contentElem = document.getElementById('content');
  contentElem.style['-webkit-transform'] = 'translateY('+ viewport.largestDimension()+ 'px)';
  contentElem.style.transform = 'translateY('+ viewport.largestDimension()+ 'px)';
  setTimeout(function() {
    contentElem.style.visibility = 'visible';
  }, 550);

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

  var viewMoreElem = document.getElementById('view-more');
  var viewLessElem = document.getElementById('view-less');
  var emailLink = document.getElementById('email-link');
  var senderEmail = document.getElementById('sender-email');
  var senderMessage = document.getElementById('sender-message');

  viewMoreElem.onclick = showContent;
  viewLessElem.onclick = hideContent;
  emailLink.onclick = emailLinkClick;
  senderEmail.onfocus = decreaseOpacityViewLess;
  senderMessage.onfocus = decreaseOpacityViewLess;
  senderEmail.onblur = increaseOpacityViewLess;
  senderMessage.onblur = increaseOpacityViewLess;

})();
