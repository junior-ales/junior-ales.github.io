(function() {
  var viewport = (function() {
    var e = window, a = 'inner';
    if (!('innerWidth' in window )) {
      a = 'client';
      e = document.documentElement || document.body;
    }
    return {
      width : e[ a+'Width' ],
      height : e[ a+'Height' ],
      largestDimension: function() {
        return this.width > this.height ? this.width : this.height;
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

  var viewMoreElem = document.getElementById('view-more');
  var viewLessElem = document.getElementById('view-less');
  var emailLink = document.getElementById('email-link');

  viewMoreElem.onclick = showContent;
  viewLessElem.onclick = hideContent;
  emailLink.onclick = function() {
    showContent();
    setTimeout(function() {
      document.getElementById('email-me').scrollIntoView();
    }, 550);
  };

})();
