var post1 = {
  id: 0,
  name: 'lunch-by-the-bay',
  title: 'Lunch by the Bay',
  dir: 'posts/2015/05/22/',
  htmlContent: '<p>Não é difícil ver alguém que bate no peito e diz com maior orgulho Bitters health goth cardigan, vinyl listicle street art letterpress gastropub meggings Vice sartorial cred. Fap Shoreditch lumbersexual semiotics deep v mlkshk. Ethical sartorial pour-over artisan, chia typewriter cronut messenger bag single-origin coffee mlkshk Brooklyn. Raw denim cold-pressed McSweeney\'s cardigan, blog put a bird on it meditation forage freegan bitters High Life dreamcatcher whatever. Swag asymmetrical cronut keffiyeh. Umami Odd Future Bushwick, pop-up artisan mustache paleo migas irony organic tote bag sartorial slow-carb. Direct trade retro chillwave sustainable street art, Vice sartorial.</p>',
  location: 'San Francisco, USA',
  pubdate: new Date('2015-05-23'),
  viewsRanking: 1
};

var post2 = {
  id: 1,
  name: 'origami-party',
  title: 'Origami Party',
  dir: 'posts/2015/04/13/',
  htmlContent: '<p>Bitters health goth cardigan,</p> <p>vinyl listicle street art letterpress gastropub meggings Vice sartorial cred. Fap Shoreditch lumbersexual semiotics deep v mlkshk. Ethical sartorial pour-over artisan, chia typewriter cronut messenger bag single-origin coffee mlkshk Brooklyn. Raw denim cold-pressed McSweeney\'s cardigan, blog put a </p><p>bird on it meditation forage freegan bitters High Life dreamcatcher whatever. Swag asymmetrical cronut keffiyeh. Umami Odd Future Bushwick, pop-up artisan mustache paleo migas irony organic tote bag sartorial slow-carb. Direct trade retro chillwave sustainable street art, Vice sartorial.</p>',
  location: 'Pune, India',
  pubdate: new Date('2015-04-14'),
  viewsRanking: 3
};

var post3 = {
  id: 2,
  name: 'floating-flowers',
  title: 'Floating Flowers',
  dir: 'posts/2015/07/17/',
  htmlContent: '<p>Bitters health goth cardigan,<br /> vinyl listicle street art letterpress gastropub meggings Vice sartorial cred. Fap Shoreditch lumbersexual semiotics deep v mlkshk. Ethical sartorial pour-over artisan, chia typewriter cronut messenger bag single-origin coffee mlkshk Brooklyn. Raw denim cold-pressed McSweeney\'s cardigan, blog put a bird on it meditation forage freegan bitters High Life dreamcatcher whatever. Swag asymmetrical cronut keffiyeh. Umami Odd Future Bushwick, pop-up artisan mustache paleo migas irony organic tote bag sartorial slow-carb. Direct trade retro chillwave sustainable street art, Vice sartorial.</p>',
  location: 'Amsterdam, Netherlands',
  pubdate: new Date('2015-07-18'),
  viewsRanking: 2
};

var sortedByProperty = function(property, arr) {
  return arr.slice().sort(function(a, b) {
    if (a[property] > b[property]) { return 1; }
    if (a[property] < b[property]) { return -1; }
    return 0;
  });
};

var allPosts = [post1, post2, post3];

var sortedPostsObj = {
  'most-viewed': sortedByProperty('viewsRanking', allPosts),
  'latest': sortedByProperty('pubdate', allPosts).reverse()
};

module.exports = {
  getAllSortedBy: function (key) { return sortedPostsObj[key]; },
  getByName: function(name) {
    return allPosts.filter(function(post) {
      return post.name === name;
    })[0];
  }
};
