var app = require(__dirname + '/../app');
var assert = require('assert');
var webdriver = require('selenium-webdriver');
var test = require('selenium-webdriver/testing');
var By = webdriver.By;

test.describe('Home Page', function() {
  test.before(function(done) {
    this.server = require('http').createServer(app).listen(3000);
    this.driver = new webdriver.Builder().forBrowser('phantomjs').build();
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
    var elem = this.driver.findElement(By.css('#title h1'));
    elem.getText().then(function(text) {
      assert.equal(text, 'junior ales');
      done();
    });
  });

  test.it('should have a links of main social media', function(done) {
    var socialMediaNames = ['medium', 'twitter', 'linkedin'];
    this.driver.findElements(By.css('#social-media-buttons a')).then(function(links) {
      webdriver.promise.filter(links, removeLocalhost)
        .then(function(allLinksButLocalhost) {
          assert.equal(socialMediaNames.length, allLinksButLocalhost.length);

          allLinksButLocalhost.forEach(function(link) {
            link.getAttribute('href').then(function(attr) {
              var urlIncludesName = socialMediaNames.some(function(name) {
                return attr.indexOf(name) >= 0;
              });
              assert.ok(urlIncludesName);
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
    var elem = this.driver.findElement(By.id('email-link'));
    elem.isDisplayed().then(function(result) {
      assert.ok(result);
      done();
    });
  });

  test.it('should have a button to see MORE content');
  test.it('should not have a button to see LESS content');
  test.it('should not show the the elements of more content section');

  test.describe('more content', function() {
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
