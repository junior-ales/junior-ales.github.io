/*jshint expr: true*/ // so it accept chai's to.be.true/false

var app = require(__dirname + '/../app');
var expect = require('chai').expect;
var webdriver = require('selenium-webdriver');
var test = require('selenium-webdriver/testing');
var by = webdriver.By;
var until = webdriver.until;

function Assure(driver) {
  'use strict';

  this.windowSizeIs = function(x, y) {
    driver.manage().window().getSize().then(function(size) {
      driver.manage().window().setSize(x, y);
    });
  };
}

test.describe('Home Page', function() {
  'use strict';

  test.before(function(done) {
    this.server = require('http').createServer(app).listen(3000);
    this.driver = new webdriver.Builder().forBrowser('phantomjs').build();
    this.assure = new Assure(this.driver);
    this.windowHeight = 640;
    this.assure.windowSizeIs(360, this.windowHeight);
    done();
  });

  test.after(function(done) {
    this.server.close();
    this.driver.quit();
    done();
  });

  test.beforeEach(function(done) {
    this.driver.get('http://localhost:3000');
    done();
  });

  test.it('should have my name =\)', function(done) {
    var elem = this.driver.findElement(by.css('#title h1'));
    elem.getText().then(function(text) {
      expect(text).to.be.equal('junior ales');
      done();
    });
  });

  test.it('should have a links of main social media', function(done) {
    var socialMediaNames = ['medium', 'twitter', 'linkedin'];
    this.driver.findElements(by.css('#social-media-buttons a')).then(function(links) {
      webdriver.promise.filter(links, removeLocalhost)
        .then(function(allLinksButLocalhost) {

          expect(allLinksButLocalhost).to.have.length(socialMediaNames.length);

          allLinksButLocalhost.forEach(function(link) {
            link.getAttribute('href').then(function(attr) {
              var urlIncludesName = socialMediaNames.some(function(name) {
                return attr.indexOf(name) >= 0;
              });
              expect(urlIncludesName).to.be.true;
              done();
            });
          });
        });

      function removeLocalhost(link) {
        return link.getAttribute('href').then(function(attr) {
          return attr.indexOf('localhost') === -1;
        });
      }
    });
  });

  test.it('should not have a button to see LESS content', function(done) {
    var elem = this.driver.findElement(by.css('#view-less'));
    elem.isDisplayed().then(function(result) {
      expect(result).to.be.false;
      done();
    });
  });

  test.it('should not place the content section on the top of the viewport', function(done) {
    var windowHeight = this.windowHeight;
    var elem = this.driver.findElement(by.css('#content'));

    elem.getAttribute('style').then(function(styleAttr) {
      var regex = /translateY\((\d+)(px)?\)/;
      var translateYValue = regex.exec(styleAttr)[1];
      expect(translateYValue).to.be.above(0);
      done();
    });
  });

  test.describe('more content', function() {
    test.beforeEach(function(done) {
      this.driver.findElement(by.css('#view-more')).click();
      this.driver.wait(until.elementIsVisible(this.driver.findElement(by.id('view-less'))), 1000);
      done();
    });

    test.it('should place the content on the top of the viewport', function(done) {
      var elem = this.driver.findElement(by.css('#content'));

      elem.getAttribute('style').then(function(styleAttr) {
        var regex = /translateY\((\d+)(px)?\)/;
        var translateYValue = parseInt(regex.exec(styleAttr)[1], 10);
        expect(translateYValue).to.equal(0);
        done();
      });
    });

    test.it('should not show elements of the initial view', function(done) {
      var initialViewElems = [
        this.driver.findElement(by.css('#social-media-buttons')),
        this.driver.findElement(by.css('#title')),
        this.driver.findElement(by.css('#main-footer'))
      ];
      initialViewElems.forEach(function(elem) {
        elem.isDisplayed().then(function(result) {
          expect(result).to.be.false;
        });
      });
      done();
    });

    test.it('should have content sections', function(done) {
      this.driver.findElements(by.css('.content-block')).then(function(sections) {
        sections.forEach(function(section) {
          section.isDisplayed().then(function(result) {
            expect(result).to.be.true;
          });
        });
        done();
      });
    });

    test.it('should have a footer with links of social media and the github project', function(done) {
      var linkNames = ['linkedin', 'instagram', 'facebook', 'github', 'junior-ales.github.io'];

      this.driver.findElements(by.css('#email-me footer a')).then(function(footerLinks) {
        expect(footerLinks).to.have.length(linkNames.length);

        footerLinks.forEach(function(link) {
          link.getAttribute('href').then(function(attr) {
            var urlIncludesName = linkNames.some(function(name) {
              return attr.indexOf(name) >= 0;
            });
            expect(urlIncludesName).to.be.true;
          });
        });
        done();
      });
    });

    test.it('should show initial view when view less is clicked', function(done) {
      var initialViewElems = [
        this.driver.findElement(by.css('#social-media-buttons')),
        this.driver.findElement(by.css('#title')),
        this.driver.findElement(by.css('#main-footer'))
      ];

      this.driver.findElement(by.id('view-less')).click();
      this.driver.wait(until.elementIsVisible(this.driver.findElement(by.id('view-more'))), 1000);

      initialViewElems.forEach(function(elem) {
        elem.isDisplayed().then(function(result) {
          expect(result).to.be.true;
        });
      });
      done();
    });
  });

  test.describe('contact form', function() {
    test.beforeEach(function(done) {
      this.driver.findElement(by.css('#email-link')).click();
      this.driver.wait(until.elementIsVisible(this.driver.findElement(by.id('view-less'))), 1000);
      done();
    });

    test.it('should show a success message when sending email', function(done) {
      var validEmail = "user@mail.com";
      this.driver.findElement(by.css('#sender-email')).sendKeys(validEmail);
      this.driver.findElement(by.css('#sender-message')).sendKeys('an email message');
      this.driver.findElement(by.css('#send-email-button')).click();

      var alertMessageElem = this.driver.findElement(by.css('#alert-content'));
      this.driver.wait(until.elementIsVisible(alertMessageElem), 3000);

      alertMessageElem.getText().then(function(alertMessage) {
        var successMessage = "Email Sent Successfuly";
        expect(alertMessage).to.be.equal(successMessage);
        done();
      });
    });

    test.it('should show an error message when form is empty', function(done) {
      this.driver.findElement(by.css('#send-email-button')).click();

      var alertMessageElem = this.driver.findElement(by.css('#alert-content'));
      this.driver.wait(until.elementIsVisible(alertMessageElem), 3000);

      alertMessageElem.getText().then(function(alertMessage) {
        var errorMessage = "Please add a valid email and a message";
        expect(alertMessage).to.be.equal(errorMessage);
        done();
      });
    });

    test.it('should show an error message when a message is missing', function(done) {
      var validEmail = "user@mail.com";
      this.driver.findElement(by.css('#sender-email')).sendKeys(validEmail);
      this.driver.findElement(by.css('#send-email-button')).click();

      var alertMessageElem = this.driver.findElement(by.css('#alert-content'));
      this.driver.wait(until.elementIsVisible(alertMessageElem), 3000);

      alertMessageElem.getText().then(function(alertMessage) {
        var errorMessage = 'Please add a valid email and a message';
        expect(alertMessage).to.be.equal(errorMessage);
        done();
      });
    });

    test.it('should show an error message when email is invalid', function(done) {
      var invalidEmails = [
        '',
        'noAt',
        'a string',
        '@com.br',
        'something@',
        'something@@',
        'something@com'
      ];
      var driver = this.driver;
      var alertMessageElem = driver.findElement(by.css('#alert-content'));
      var sendEmailInput = driver.findElement(by.css('#sender-email'));
      var sendEmailButton = driver.findElement(by.css('#send-email-button'));
      var errorMessage = 'Please add a valid email and a message';

      invalidEmails.forEach(function(invalidEmail) {
        sendEmailInput.clear();
        sendEmailInput.sendKeys(invalidEmail);
        sendEmailButton.click();

        driver.wait(until.elementIsVisible(alertMessageElem), 3000);

        alertMessageElem.getText().then(function(alertMessage) {
          expect(alertMessage).to.be.equal(errorMessage);
        });
      });
      done();
    });
  });
});
