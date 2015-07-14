var Post = React.createClass({
  render: function() {
    var post = this.props.post;

    return (
      <a className='post-wrapper' href={post.href} alt={post.title}>
        <article className='post'>
          <p className='post__location'>{post.location}</p>
          <p className='post__pubdate'>
            <time className='post_pubdate__time' dateTime={post.pubdate.toString}>
              <span className='post__pubdate__month'>{post.pubdate.month}</span>
              <br />
              <span className='post__pubdate__day'>{post.pubdate.day}</span>
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
    return (
      <section className='post-list-wrapper'>
        {this.props.posts.map(function(post) {
          return <Post key={post.pubdate.toString + '-' + post.id} post={post} />;
        })}
      </section>
    );
  }
});

var SortingOptions = React.createClass({
  render: function() {
    return (
      <ul className='post-list'>
        <li className='post-list__sorting'>most viewed</li>
        <li className='post-list__sorting--separator'>|</li>
        <li className='post-list__sorting--active'>latest</li>
      </ul>
    );
  }
});

var PostsContainer = React.createClass({
  render: function() {
    return (
      <section className='posts-container'>
        <SortingOptions />
        <PostList posts={this.props.posts} />
      </section>
    );
  }
});

module.exports = PostsContainer;
