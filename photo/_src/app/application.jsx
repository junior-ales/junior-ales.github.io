"use strict";

var post1 = {
  id: 0,
  title: 'Lunch by the Bay',
  subtitle: 'Four dollar toast High Life photo booth wayfarers direct trade. Retro fanny pack ennui mixtape Williamsburg.',
  href: '/posts/2015/02/21/lunch-by-the-bay.html',
  cover: '/posts/2015/02/21/lunch-by-the-bay.jpg',
  location: 'San Francisco, USA',
  pubdate: {
    toString: '2015-02-21',
    month: 'Feb',
    day: 21
  },
  viewsRanking: 1
};

var post2 = {
  id: 1,
  title: 'Origami Party',
  subtitle: 'Four dollar toast High Life photo booth wayfarers direct trade. Retro fanny pack ennui mixtape Williamsburg.',
  href: '/posts/2015/04/13/origami-party.html',
  cover: '/posts/2015/04/13/origami-party.jpg',
  location: 'Pune, India',
  pubdate: {
    toString: '2015-04-13',
    month: 'Apr',
    day: 13
  },
  viewsRanking: 2
};

var post3 = {
  id: 2,
  title: 'Flowers Fountain',
  subtitle: 'Four dollar toast High Life photo booth wayfarers direct trade. Retro fanny pack ennui mixtape Williamsburg.',
  href: '/posts/2015/07/17/flowers-fountain.html',
  cover: '/posts/2015/07/17/flowers-fountain.jpg',
  location: 'Amsterdam, Netherlands',
  pubdate: {
    toString: '2015-07-17',
    month: 'Jul',
    day: 17
  },
  viewsRanking: 3
};

var PostsContainer = require('templates/postsContainer');

var App = {
  init: function init() {
    var posts = [post1, post2, post3];
    React.render(<PostsContainer posts={posts} />, document.getElementById('home-page-posts'));
  }
};

module.exports = App;
