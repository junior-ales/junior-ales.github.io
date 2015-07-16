"use strict";

var PostsContainer = require('templates/postsContainer');

var App = {
  init: function init() {
    React.render(<PostsContainer />, document.getElementById('home-page-posts'));
  }
};

module.exports = App;
