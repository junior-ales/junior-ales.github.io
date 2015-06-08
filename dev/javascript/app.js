(function() {
  var viewMoreElem = document.getElementById('view-more');
  var viewLessElem = document.getElementById('view-less');

  viewMoreElem.onclick = function() {
    viewLessElem.style.display = null;
    document.getElementById('social-media-buttons').style.display = 'none';
    document.getElementById('title').style.display = 'none';
    document.getElementById('content').style.display = null;
    viewMoreElem.style.display = 'none';
  };

  viewLessElem.onclick = function() {
    viewMoreElem.style.display = null;
    document.getElementById('social-media-buttons').style.display = null;
    document.getElementById('title').style.display = null;
    document.getElementById('content').style.display = 'none';
    viewLessElem.style.display = 'none';
  };

})();
