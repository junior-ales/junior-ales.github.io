var Post = React.createClass({
  render: function() {
    var monthNames = [
      "Jan", "Feb", "Mar",
      "Apr", "May", "Jun",
      "Jul", "Aug", "Sep",
      "Oct", "Nov", "Dec"
    ];
    var post = this.props.post;

    return (
      <a className='post-wrapper' href={post.href} alt={post.title}>
        <article className='post'>
          <p className='post__location'>{post.location}</p>
          <p className='post__pubdate'>
            <time className='post_pubdate__time' dateTime={post.pubdate}>
              <span className='post__pubdate__month'>{monthNames[post.pubdate.getMonth()]}</span>
              <br />
              <span className='post__pubdate__day'>{post.pubdate.getDate()}</span>
            </time>
          </p>
          <header className='post__content'>
            <h1 className='post__content__title'>{post.title}</h1>
            <p>{post.description}</p>
          </header>
        </article>
      </a>
    );
  }
});

var PostList = React.createClass({
  render: function() {
    var sortedByProperty = function(property, arr) {
      return arr.slice().sort(function(a, b) {
        if (a[property] > b[property]) { return 1; }
        if (a[property] < b[property]) { return -1; }
        return 0;
      })
    };

    var posts = sortedByProperty('viewsRanking', this.props.posts);

    if (this.props.sortBy === 'latest') {
      posts = sortedByProperty('pubdate', this.props.posts).reverse();
    }

    return (
      <section className='post-list-wrapper'>
        {posts.map(function(post) {
          return <Post key={post.pubdate.toDateString()+'-'+post.id} post={post} />;
        })}
      </section>
    );
  }
});

var SortingOptions = React.createClass({
  render: function() {
    var classLatest = 'post-list__sorting';
    var classMostViewed = 'post-list__sorting';

    if (this.props.sortBy === 'latest') {
      classLatest = 'post-list__sorting--active';
    } else {
      classMostViewed = 'post-list__sorting--active';
    }

    return (
      <ul className='post-list'>
        <li className={classMostViewed}>most viewed</li>
        <li className='post-list__sorting--separator'>|</li>
        <li className={classLatest}>latest</li>
      </ul>
    );
  }
});

var PostsContainer = React.createClass({
  getInitialState: function() {
    return {
      sortBy: 'latest'
    };
  },

  render: function() {
    return (
      <section className='posts-container'>
        <SortingOptions sortBy={this.state.sortBy} />
        <PostList posts={this.props.posts} sortBy={this.state.sortBy} />
      </section>
    );
  }
});

module.exports = PostsContainer;
