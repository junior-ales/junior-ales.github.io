"use strict";

var Post = React.createClass({
  detailedLayout: function(post) {
    return (
      <a className='post-wrapper' href={post.dir + post.name + '.html'}>
        <img className='post__cover--cropped'
             src={post.dir + post.name + '--cropped.jpg'} alt={post.title + ' foto'} />
      </a>
    );
  },

  defaultLayout: function(post) {
    var pubdate = moment(post.pubdate.toString());

    return (
      <a className='post-wrapper' href={post.dir + post.name + '.html'}>
        <img className='post__cover'
             srcSet={post.dir + post.name + '--large.jpg 1920w, ' +
                     post.dir + post.name + '--medium.jpg 1280w, ' +
                     post.dir + post.name + '--small.jpg 640w'}
             sizes="(max-width: 1075px) 490px, 930px"
             src={post.dir + post.name + '--medium.jpg'} alt={post.title + ' foto'} />
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
    );
  },

  getDefaultProps: function() {
    return { layout: 'default' };
  },

  render: function() {
    moment.locale('pt-BR');
    var post = this.props.post;

    if (this.props.pathNormalizer) {
      post.dir = "../../../../".concat(post.dir);
    }

    return (
      <article className='post'>
        {this.props.layout === 'detailed' ? this.detailedLayout(post) : this.defaultLayout(post) }
      </article>
    );
  }
});

module.exports = Post;
