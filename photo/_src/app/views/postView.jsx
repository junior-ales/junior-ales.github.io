'use strict';

var Posts = require('model/post');
var PostList = require('./components/postList');
var Tracker = require('model/tracker');

var postName = (function() {
  var pathname = location.pathname;
  var fileNameIndex = pathname.lastIndexOf('/') + 1;
  return pathname.substring(fileNameIndex).split('.')[0];
})();

var PostContent = React.createClass({
  getDateFormat: function() {
    return window.innerWidth > 650 ? 'LL' : 'DD/MMM/YYYY';
  },

  getInitialState: function() {
    return { dateFormat: this.getDateFormat() };
  },

  handleResize: function(e) {
    this.setState({ dateFormat: this.getDateFormat() });
  },

  componentDidMount: function() {
    window.addEventListener('resize', this.handleResize);
  },

  componentWillUnmount: function() {
    window.removeEventListener('resize', this.handleResize);
  },

  render: function() {
    var post = this.props.post;
    moment.locale('pt-BR');
    var postContent = function() { return { __html: post.htmlContent }; };

    return (
      <div className="post-content">
        <header className="post-content__header">
          <h2>{post.title}</h2>
          <span className="post-content__detail">
            {post.location}
            <time dateTime={post.pubdate.toString()}>
              {moment(post.pubdate.toString()).format(this.state.dateFormat)}
            </time>
          </span>
        </header>
        <img className="post-content__image"
             srcSet={post.name + '--large.jpg 1920w, ' +
                     post.name + '--medium.jpg 1280w, ' +
                     post.name + '--small.jpg 640w'}
             src={post.name + '--medium.jpg'} alt={post.title + ' photo'} />
             <p className="post-content__copyright">
               "<a href={post.name + '--medium.jpg'}>{post.title}</a>"
               por <a href="http://www.juniorales.com">Junior Ales</a> /
               <a href="http://creativecommons.org/licenses/by-sa/4.0/deed.pt_BR"> CC BY-SA 4.0</a>
             </p>
        <section className='post-content__text' dangerouslySetInnerHTML={postContent()} />
      </div>
    );
  }
});

var MorePosts = React.createClass({
  loadedPostsState: function() {
    var removeCurrentPost = function(post) {
      return post.name !== postName;
    };

    return {
      posts: Posts.getAllSortedBy('most-viewed').slice(0,3).filter(removeCurrentPost),
      listTitle: 'fotos mais vistas'
    };
  },
  getInitialState: function() {
    return this.props.autoLoad ? this.loadedPostsState() : { posts: [], listTitle: '' };
  },
  handleClick: function() {
    this.setState(this.loadedPostsState());
  },
  render: function() {
    var arePostsLoaded = this.state.posts.length !== 0;
    var morePostsButton = (
      <button className='more-photos__button' data-track-identifier='load-more' onClick={this.handleClick}>
        mais fotos
      </button>
    );
    var postList = <PostList pathNormalizer={true} listTitle={this.state.listTitle} posts={this.state.posts} />;

    return (
      <div className="more-photos">
        {arePostsLoaded ? null : morePostsButton }
        {arePostsLoaded ? postList : null }
      </div>
    );
  }
});

var PostView = React.createClass({
  render: function() {
    var shouldAutoLoad = window.innerWidth > 1075;
    return(
      <div>
        <PostContent post={Posts.getByName(postName)} />
        <MorePosts autoLoad={shouldAutoLoad} />
      </div>
    );
  }
});

module.exports = {
  trackEvents: function trackEvents(tracker) {
    tracker.track("photoblog:post:visit");

    (function setTrackingRegularElements() {
      var elems = document.querySelectorAll("*[data-track-identifier]");
      tracker.trackElems(elems).as("photoblog:post:").andIds();
    })();

    (function setTrackingMostViewedPosts() {
      var posts = document.querySelectorAll(".more-photos .post-wrapper");
      tracker.trackElems(posts).as("photoblog:post:most-viewed:post");
    })();
  },

  init: function init() {
    React.render(<PostView />, document.getElementById('post-container'));
    this.trackEvents(new Tracker(window.mixpanel));
  }
};
