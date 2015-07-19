"use strict";

var PostsContainer = require('views/postsContainer');

var App = {
  init: function init() {
    React.render(<PostsContainer />, document.getElementById('home-page-posts'));
  }
};

module.exports = App;
