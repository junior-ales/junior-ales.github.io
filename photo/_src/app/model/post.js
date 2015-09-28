"use strict";

var allPosts = require('./posts');

var sortedByProperty = function(property, arr) {
  return arr.slice().sort(function(a, b) {
    if (a[property] > b[property]) { return 1; }
    if (a[property] < b[property]) { return -1; }
    return 0;
  });
};

var sortedPostsObj = function(posts) {
  return {
    'most-viewed': sortedByProperty('viewsRanking', posts),
    'latest': sortedByProperty('pubdate', posts).reverse()
  };
}

module.exports = {
  current: function(posts) {
    return {
      sortBy: function(sortOption) {
        return sortedPostsObj(posts)[sortOption];
      }
    };
  },
  getAllSortedBy: function (sortOption) { return sortedPostsObj(allPosts)[sortOption]; },
  getByName: function(name) {
    return allPosts.filter(function(post) {
      return post.name === name;
    })[0];
  }
};
