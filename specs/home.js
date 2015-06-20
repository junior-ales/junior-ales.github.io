process.env.NODE_ENV = 'test';
var app = require(__dirname + '/../app');
var assert = require('assert');
var Browser = require('zombie');

describe('Home Page', function() {

  before(function() {
    this.server = require('http').createServer(app).listen(3000);
    this.browser = new Browser({ site: 'http://localhost:3000' });
  });

  beforeEach(function(done) {
    this.browser.visit('/', done);
  });

  it('should have have my name =\)', function() {
    assert.ok(this.browser.success);
    assert.equal(this.browser.text('#title h1'), 'junior ales');
  });

  it('should have links of main social media');
  it('should have a link to contact form');
  it('should have a button to see MORE content');
  it('should not have a button to see LESS content');

  describe('more content', function() {
    it('should have a button to see LESS content');
    it('should not have a button to see MORE content');
    it('should have a summary');
    it('should have a personal blog section');
    it('should have a twitter section');
    it('should have a footer with links of social media and the github project');

    describe('contact form', function() {
      it('should show a success message when sending email');
      it('should show an error message when form is empty');
      it('should show an error message when email address is missing');
      it('should show an error message when a message is missing');
    });
  });
});
