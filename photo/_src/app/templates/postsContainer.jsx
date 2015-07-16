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
      <a className='post-wrapper' href={post.href}>
        <article className='post'>
          <img className='post__cover' src={post.cover} alt={post.title + ' photo'} />
          <p className='post__location'>{post.location}</p>
          <p className='post__pubdate'>
            <time className='post_pubdate__time' dateTime={post.pubdate}>
              <span className='post__pubdate__month'>{monthNames[post.pubdate.getMonth()]}</span>
              <br />
              <span className='post__pubdate__day'>{post.pubdate.getDate()}</span>
            </time>
          </p>
          <h1 className='post__title'>{post.title}</h1>
        </article>
      </a>
    );
  }
});

var PostList = React.createClass({
  render: function() {
    return (
      <section className='post-list-wrapper'>
        {this.props.posts.map(function(post) {
          return <Post key={post.title+'-'+post.id} post={post} />;
        })}
      </section>
    );
  }
});

var SortingOptions = React.createClass({
  handleClick: function(event) {
    this.props.onSortingChange(event.target.dataset.sortingOption);
  },

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
        <li className={classMostViewed}>
          <button onClick={this.handleClick}
                  className='post-list__button'
                  data-sorting-option='most-viewed'>
            most viewed
          </button>
        </li>
        <li className='post-list__sorting--separator'>|</li>
        <li className={classLatest}>
          <button data-sorting-option='latest'
                  onClick={this.handleClick}
                  className='post-list__button'>
            latest
          </button>
        </li>
      </ul>
    );
  }
});

var Posts = require('model/posts');

var PostsContainer = React.createClass({
  getInitialState: function() {
    return {
      sortBy: 'latest',
      posts: Posts.getSortedBy('latest')
    };
  },

  handleSortingChange: function(sortOption) {
    this.setState({
      sortBy: sortOption,
      posts: Posts.getSortedBy(sortOption)
    });
  },

  render: function() {
    return (
      <section className='posts-container'>
        <SortingOptions sortBy={this.state.sortBy} onSortingChange={this.handleSortingChange} />
        <PostList posts={this.state.posts} />
      </section>
    );
  }
});

module.exports = PostsContainer;
