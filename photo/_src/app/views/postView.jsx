'use strict';

var Post = require('model/post');

var postName = (function() {
  var pathname = location.pathname;
  var fileNameIndex = pathname.lastIndexOf('/') + 1;
  return pathname.substring(fileNameIndex).split('.')[0];
})();

var PostView = React.createClass({
  render: function() {
    var post = this.props.post;
    var postContent = function() { return { __html: post.htmlContent }; };

    return (
      <div className="post-content">
        <header className="post-content__header">
          <h1>{post.title}</h1>
          <time dateTime={post.pubdate.toString()}>
            {moment(post.pubdate.toString()).format('LL')}
          </time>
        </header>
        <img className="post-content__image" src={post.name + '.jpg'} alt={post.title + ' photo'} />
        <section className='post-content__text' dangerouslySetInnerHTML={postContent()} />
      </div>
    );
  }
});

module.exports = {
  init: function init() {
    React.render(
      <PostView post={Post.getByName(postName)} />, document.getElementById('post-container')
    );
  }
};
