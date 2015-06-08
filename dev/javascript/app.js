(function() {
  var showContent = function() {
    document.getElementById('social-media-buttons').style.display = 'none';
    document.getElementById('title').style.display = 'none';
    viewMoreElem.style.display = 'none';
    contentElem.style.position = 'initial';
    contentElem.style.transform = 'translateY(0)';
    setTimeout(function() {
      viewLessElem.style.display = 'block';
    }, 550);
  };

  var hideContent = function() {
    document.getElementById('social-media-buttons').style.display = null;
    document.getElementById('title').style.display = null;
    contentElem.style.transform = 'translateY(25%)';
    contentElem.style.position = 'fixed';
    viewLessElem.style.display = 'none';
    viewMoreElem.style.display = null;
  };

  var contentElem = document.getElementById('content');
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
