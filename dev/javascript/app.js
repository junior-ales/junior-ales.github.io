(function(supports) {
  if (!supports) return;

  var viewMoreElem = document.querySelector('#view-more');
  var viewLessElem = document.querySelector('#view-less');

  viewMoreElem.onclick = function() {
    viewLessElem.style.display = null;
    document.querySelector('.social-media-buttons').style.display = 'none';
    document.querySelector('.title').style.display = 'none';
    document.querySelector('.content').style.display = null;
    viewMoreElem.style.display = 'none';
  };

  viewLessElem.onclick = function() {
    viewMoreElem.style.display = null;
    document.querySelector('.social-media-buttons').style.display = null;
    document.querySelector('.title').style.display = null;
    document.querySelector('.content').style.display = 'none';
    viewLessElem.style.display = 'none';
  };


})(!!document.querySelector && !!window.addEventListener);
