"use strict";

var Post = require('./postComponent');

var PostList = React.createClass({
  getInitialState: function() {
    return { posts: this.props.posts };
  },

  render: function() {
    var self = this;
    var listPosts = function(post) {
      return <Post
              post={post}
              key={post.title+'-'+post.id}
              pathNormalizer={self.props.pathNormalizer}
              layout={self.props.postLayout} />;
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
