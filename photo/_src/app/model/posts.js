module.exports = (function() {
  var post1 = {
    id: 0,
    title: 'Lunch by the Bay',
    href: 'posts/2015/05/22/lunch-by-the-bay.html',
    cover: 'posts/2015/05/22/lunch-by-the-bay__cover.jpg',
    location: 'San Francisco, USA',
    pubdate: new Date('2015-05-23'),
    viewsRanking: 1
  };

  var post2 = {
    id: 1,
    title: 'Origami Party',
    href: 'posts/2015/04/13/origami-party.html',
    cover: 'posts/2015/04/13/origami-party__cover.jpg',
    location: 'Pune, India',
    pubdate: new Date('2015-04-14'),
    viewsRanking: 3
  };

  var post3 = {
    id: 2,
    title: 'Floating Flowers',
    href: 'posts/2015/07/17/floating-flowers.html',
    cover: 'posts/2015/07/17/floating-flowers__cover.jpg',
    location: 'Amsterdam, Netherlands',
    pubdate: new Date('2015-07-18'),
    viewsRanking: 2
  };

  var sortedByProperty = function(property, arr) {
    return arr.slice().sort(function(a, b) {
      if (a[property] > b[property]) { return 1; }
      if (a[property] < b[property]) { return -1; }
      return 0;
    })
  };

  var allPosts = [post1, post2, post3];

  var sortedPostsObj = {
    'most-viewed': sortedByProperty('viewsRanking', allPosts),
    'latest': sortedByProperty('pubdate', allPosts).reverse()
  };

  return {
    getSortedBy: function (key) { return sortedPostsObj[key]; }
  };
})();
