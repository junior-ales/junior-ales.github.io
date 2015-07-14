var Post = React.createClass({
  render: function() {
    var post = this.props.post;

    return (
      <a href={post.href} alt={post.title}>
        <article>
          <p>{post.location}</p>
          <p>
            <time dateTime={post.pubdate.toString}>
              {post.pubdate.month} <span>{post.pubdate.day}</span>
            </time>
          </p>
          <header>
            <h1>{post.title}</h1>
            <p>{post.subtitle}</p>
          </header>
        </article>
      </a>
    );
  }
});

var PostList = React.createClass({
  render: function() {
    return (
      <section>
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
