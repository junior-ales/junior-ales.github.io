"use strict";

var Post = React.createClass({
  render: function() {
    var post = this.props.post;
    var pubdate = moment(post.pubdate.toString());

    if (this.props.pathNormalizer) {
      post.dir = "../../../../".concat(post.dir);
    }

    return (
      <article className='post'>
        <a className='post-wrapper' href={post.dir + post.name + '.html'}>
          <img className='post__cover' src={post.dir + post.name + '.jpg'} alt={post.title + ' photo'} />
          <p className='post__location'>{post.location}</p>
          <p className='post__pubdate'>
            <time className='post_pubdate__time' dateTime={pubdate.format()}>
              <span className='post__pubdate__month'>{pubdate.format('MMM')}</span>
              <br />
              <span className='post__pubdate__day'>{pubdate.format('DD')}</span>
            </time>
          </p>
          <h1 className='post__title'>{post.title}</h1>
        </a>
      </article>
    );
  }
});

var PostList = React.createClass({
  render: function() {
    var self = this;
    var posts = this.props.posts.map(function(post) {
      return <Post pathNormalizer={self.props.pathNormalizer} key={post.title+'-'+post.id} post={post} />;
    });

    return (
      <section className='post-list-wrapper'>
        <h2 className="sub-header">
          <span>{this.props.listTitle}</span>
        </h2>
        {posts}
      </section>
    );
  }
});

module.exports = PostList;
