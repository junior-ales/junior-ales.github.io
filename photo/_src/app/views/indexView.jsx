"use strict";

var Posts = require('model/post');
var PostList = require('./components/postList');
var Tracker = require('model/tracker');
var POSTS_INC_VALUE = 3;

var SortingOptions = React.createClass({
  handleClick: function(event) {
    this.props.onSortingChange(event.target.dataset.sortingOption);
  },

  render: function() {
    var classLatest = 'post-list__sorting';
    var classMostViewed = 'post-list__sorting';

    if (this.props.sortBy === 'latest') {
      classLatest = 'post-list__sorting--active';
    } else {
      classMostViewed = 'post-list__sorting--active';
    }

    return (
      <ul className='post-list'>
        <li className={classMostViewed}>
          <button onClick={this.handleClick}
                  className='post-list__button'
                  data-track-identifier='sort:most-viewed'
                  data-sorting-option='most-viewed'>
            mais vistas
          </button>
        </li>
        <li className='post-list__sorting--separator'>|</li>
        <li className={classLatest}>
          <button onClick={this.handleClick}
                  className='post-list__button'
                  data-track-identifier='sort:latest'
                  data-sorting-option='latest'>
            últimas
          </button>
        </li>
      </ul>
    );
  }
});

var LoadMorePosts = React.createClass({
  handleClick: function() {
    //this.props.onLoadMoreClick();
  },

  render: function() {
    return (
      <div className="load-more-posts disabled">
        <button
          title="Não há mais posts para carregar"
          className="load-more-posts__button disabled"
          onClick={this.handleClick}
          data-track-identifier="load-more">carregar mais fotos</button>
      </div>
    );
  }
});

var PostsContainer = React.createClass({
  getInitialState: function() {
    var allPosts = Posts.getAllSortedBy('latest');
    var postsLoaded = allPosts.length < POSTS_INC_VALUE ? allPosts.length : POSTS_INC_VALUE;

    return {
      sortBy: 'latest',
      postsLoaded: postsLoaded,
      allPostsLoaded: false,
      posts: allPosts.slice(0, postsLoaded)
    };
  },

  handleSortingChange: function(sortingOption) {
    this.setState({
      sortBy: sortingOption,
      posts: Posts.getAllSortedBy(sortingOption).slice(0,this.state.postsLoaded)
    });
  },

  handleLoadMorePosts: function() {
    if (this.state.allPostsLoaded) { return; }
    var allPosts = Posts.getAllSortedBy(this.state.sortBy);
    var updatedPostsLoaded, allPostsLoaded;

    if (allPosts.length >= this.state.postsLoaded + POSTS_INC_VALUE) {
      updatedPostsLoaded = this.state.postsLoaded + POSTS_INC_VALUE;
      allPostsLoaded = false;
    } else {
      updatedPostsLoaded = allPosts.length;
      allPostsLoaded = true;
    }

    this.setState({
      postsLoaded: updatedPostsLoaded,
      posts: Posts.getAllSortedBy(this.state.sortBy).slice(0, updatedPostsLoaded),
      allPostsLoaded: allPostsLoaded
    });
  },

  render: function() {
    var loadMoreButton = this.state.allPostsLoaded ? null: <LoadMorePosts onLoadMoreClick={this.handleLoadMorePosts} />;
    return (
      <section className='posts-container'>
        <SortingOptions sortBy={this.state.sortBy} onSortingChange={this.handleSortingChange} />
        <PostList listTitle="últimas fotos" posts={this.state.posts} />
        {loadMoreButton}
      </section>
    );
  }
});

var MostViewedPosts = React.createClass({
  shouldLoadMostViewedPosts: function() {
    return window.innerWidth > 1075;
  },

  getInitialState: function() {
    return { visible: this.shouldLoadMostViewedPosts() };
  },

  handleResize: function(e) {
    this.setState({ visible: this.shouldLoadMostViewedPosts() });
  },

  componentDidMount: function() {
    window.addEventListener('resize', this.handleResize);
  },

  componentWillUnmount: function() {
    window.removeEventListener('resize', this.handleResize);
  },

  render: function() {
    if (this.state.visible) {
      return <PostList
              listTitle="fotos mais vistas"
              postLayout="detailed"
              posts={Posts.getAllSortedBy('most-viewed').slice(0,3)} />;
    }
    return null;
  }
});

var App = {
  trackEvents: function trackEvents(tracker) {
    tracker.track("photoblog:home:visit");

    (function setTrackingRegularElements() {
      var elems = document.querySelectorAll("*[data-track-identifier]");
      tracker.trackElems(elems).as("photoblog:home:").andIds();
    })();

    (function setTrackingMainListPosts() {
      var posts = document.querySelectorAll("#home-page-posts .post-wrapper");
      tracker.trackElems(posts).as("photoblog:home:main-list:post");
    })();

    (function setTrackingMostViewedPosts() {
      var posts = document.querySelectorAll("#most-viewed-posts .post-wrapper");
      tracker.trackElems(posts).as("photoblog:home:aside-list:most-viewed:post");
    })();
  },

  init: function init() {
    React.render(<PostsContainer />, document.getElementById('home-page-posts'));
    React.render(<MostViewedPosts />, document.getElementById('most-viewed-posts'));
    this.trackEvents(new Tracker(window.mixpanel));
  }
};

module.exports = App;
