function Notifier(page) {
  this.success = function() {
    page.alertContentElem.innerHTML = 'Email Sent Successfuly';
    page.alertElem.style['background-color'] = 'rgb(48, 93, 84)';
    showMessage();
  };

  this.error = function(message) {
    page.alertContentElem.innerHTML = message || 'Oops! Something went wrong.<br>Please try again';
    page.alertElem.style['background-color'] = 'rgb(242, 105, 125)';
    showMessage();
  };

  function showMessage() {
    page.alertElem.style['z-index'] = 15;
    page.alertElem.style.opacity = 1;

    setTimeout(function() {
      page.alertElem.style.opacity = 0;
      page.alertElem.style['z-index'] = 0;
    }, 5000);
  }
}
