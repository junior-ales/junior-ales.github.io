'use strict';

var Posts = require('model/post');
var PostList = require('./postList');

var postName = (function() {
  var pathname = location.pathname;
  var fileNameIndex = pathname.lastIndexOf('/') + 1;
  return pathname.substring(fileNameIndex).split('.')[0];
})();

var PostContent = React.createClass({
  render: function() {
    var post = this.props.post;
    var postContent = function() { return { __html: post.htmlContent }; };

    return (
      <div className="post-content">
        <header className="post-content__header">
          <h2>{post.title}</h2>
          <span className="post-content__detail">
            {post.location}
            <time dateTime={post.pubdate.toString()}>
              {moment(post.pubdate.toString()).format('LL')}
            </time>
          </span>
        </header>
        <img className="post-content__image" src={post.name + '.jpg'} alt={post.title + ' photo'} />
        <section className='post-content__text' dangerouslySetInnerHTML={postContent()} />
      </div>
    );
  }
});

var MorePosts = React.createClass({
  getInitialState: function() {
    return { posts: [] };
  },
  handleClick: function() {
    this.setState({ posts: Posts.getAllSortedBy('most-viewed') });
  },
  render: function() {
    return (
      <div className="more-photos">
        <button className="more-photos__button" onClick={this.handleClick}>more photos</button>
        <PostList posts={this.state.posts} />
      </div>
    );
  }
});

var PostView = React.createClass({
  render: function() {
    return(
      <div>
        <PostContent post={Posts.getByName(postName)} />
        <MorePosts />
      </div>
    );
  }
});

module.exports = {
  init: function init() {
    React.render(
      <PostView />, document.getElementById('post-container')
    );
  }
};
