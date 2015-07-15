"use strict";

var post1 = {
  id: 0,
  title: 'Lunch by the Bay',
  href: 'posts/2015/05/22/lunch-by-the-bay.html',
  cover: 'posts/2015/05/22/lunch-by-the-bay.jpg',
  location: 'San Francisco, USA',
  pubdate: new Date('2015-05-23'),
  viewsRanking: 1
};

var post2 = {
  id: 1,
  title: 'Origami Party',
  href: 'posts/2015/04/13/origami-party.html',
  cover: 'posts/2015/04/13/origami-party.jpg',
  location: 'Pune, India',
  pubdate: new Date('2015-04-13'),
  viewsRanking: 3
};

var post3 = {
  id: 2,
  title: 'Flowers Fountain',
  href: 'posts/2015/07/17/flowers-fountain.html',
  cover: 'posts/2015/07/17/flowers-fountain.jpg',
  location: 'Amsterdam, Netherlands',
  pubdate: new Date('2015-07-17'),
  viewsRanking: 2
};

var PostsContainer = require('templates/postsContainer');

var App = {
  init: function init() {
    var posts = [post1, post2, post3];
    React.render(<PostsContainer posts={posts} />, document.getElementById('home-page-posts'));
  }
};

module.exports = App;
