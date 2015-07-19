'use strict';

var Post = require('model/post');

var postName = (function() {
  var pathname = location.pathname;
  var fileNameIndex = pathname.lastIndexOf('/') + 1;
  return pathname.substring(fileNameIndex).split('.')[0];
})();

var PostView = React.createClass({
  render: function() {
    return (
      <h1>{this.props.post.title}</h1>
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
