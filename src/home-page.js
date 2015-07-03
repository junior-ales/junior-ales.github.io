function HomePage(document, window) {
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
