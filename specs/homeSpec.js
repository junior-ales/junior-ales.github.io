/*jshint expr: true*/ // so it accept chai's to.be.true/false

var app = require(__dirname + '/../app');
var expect = require('chai').expect;
var webdriver = require('selenium-webdriver');
var test = require('selenium-webdriver/testing');
var by = webdriver.By;

function Assure(driver) {
  'use strict';

  this.isDisplayed = function(elemCss, done) {
    var elem = driver.findElement(by.css(elemCss));
    elem.isDisplayed().then(function(result) {
      expect(result).to.be.true;
      done();
    });
  };

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

  test.it('should have a link to contact form', function(done) {
    this.assure.isDisplayed('#email-link', done);
  });

  test.it('should have a button to see MORE content', function(done) {
    this.assure.isDisplayed('#view-more', done);
  });

  test.it('should not have a button to see LESS content', function(done) {
    var elem = this.driver.findElement(by.css('#view-less'));
    elem.isDisplayed().then(function(result) {
      expect(result).to.be.false;
      done();
    });
  });

  test.xit('should place the content section below the viewport height', function(done) {
    var windowHeight = this.windowHeight;
    var elem = this.driver.findElement(by.css('#content'));

    elem.getCssValue('transform').then(function(transformValue) {
      expect(transformValue).to.be.equal('translateY(' + windowHeight + 'px)');
      done();
    });
  });

  test.describe('more content', function() {
    test.it('should place the content section visible');
    test.it('should have a button to see LESS content');
    test.it('should not show elements of the initial view');
    test.it('should have a summary');
    test.it('should have a personal blog section');
    test.it('should have a twitter section');
    test.it('should have a footer with links of social media and the github project');

    test.describe('contact form', function() {
      test.it('should show a success message when sending email');
      test.it('should show an error message when form is empty');
      test.it('should show an error message when email address is missing');
      test.it('should show an error message when a message is missing');
    });
  });
});
