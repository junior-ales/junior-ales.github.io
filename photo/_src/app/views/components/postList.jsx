"use strict";

var Post = React.createClass({
  render: function() {
    moment.locale('pt-BR');
    var post = this.props.post;
    var pubdate = moment(post.pubdate.toString());

    if (this.props.pathNormalizer) {
      post.dir = "../../../../".concat(post.dir);
    }

    return (
      <article className='post'>
        <a className='post-wrapper' href={post.dir + post.name + '.html'}>
          <img className='post__cover'
               srcSet={post.dir + post.name + '--large.jpg 1920w, ' +
                       post.dir + post.name + '--medium.jpg 1280w, ' +
                       post.dir + post.name + '--small.jpg 640w'}
               sizes="(max-width: 1075px) 490px, 930px"
               src={post.dir + post.name + '--medium.jpg'} alt={post.title + ' photo'} />
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
  getInitialState: function() {
    return { posts: this.props.posts };
  },

  render: function() {
    var self = this;
    var listPosts = function(post) {
      return <Post pathNormalizer={self.props.pathNormalizer} key={post.title+'-'+post.id} post={post} />;
    };

    return (
      <section className='post-list-wrapper'>
        <h2 className="sub-header">
          <span>{this.props.listTitle}</span>
        </h2>

        {this.props.posts.map(listPosts)}
      </section>
    );
  }
});

module.exports = PostList;
