"use strict";

var Posts = require('model/post');
var PostList = require('./postList');
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
                  data-sorting-option='most-viewed'>
            most viewed
          </button>
        </li>
        <li className='post-list__sorting--separator'>|</li>
        <li className={classLatest}>
          <button data-sorting-option='latest'
                  onClick={this.handleClick}
                  className='post-list__button'>
            latest
          </button>
        </li>
      </ul>
    );
  }
});

var LoadMorePosts = React.createClass({
  handleClick: function() {
    this.props.onLoadMoreClick();
  },

  render: function() {
    return <button onClick={this.handleClick}>load more</button>;
  }
});

var PostsContainer = React.createClass({
  getInitialState: function() {
    var allPosts = Posts.getAllSortedBy('latest');
    var postsLoaded = allPosts.length < POSTS_INC_VALUE ? allPosts.length : POSTS_INC_VALUE;

    return {
      sortBy: 'latest',
      postsLoaded: postsLoaded,
      posts: allPosts.slice(0, postsLoaded)
    };
  },

  handleSortingChange: function(sortOption) {
    this.setState({
      sortBy: sortOption,
      posts: Posts.getAllSortedBy(sortOption).slice(0,this.state.postsLoaded)
    });
  },

  handleLoadMorePosts: function() {
    var allPosts = Posts.getAllSortedBy(this.state.sortBy);
    var updatedPostsLoaded;

    if (allPosts.length >= this.state.postsLoaded + POSTS_INC_VALUE) {
      updatedPostsLoaded = this.state.postsLoaded + POSTS_INC_VALUE;
    } else {
      updatedPostsLoaded = allPosts.length;
    }

    this.setState({
      postsLoaded: updatedPostsLoaded,
      posts: Posts.getAllSortedBy(this.state.sortBy).slice(0, updatedPostsLoaded)
    });
  },

  render: function() {
    return (
      <section className='posts-container'>
        <SortingOptions sortBy={this.state.sortBy} onSortingChange={this.handleSortingChange} />
        <PostList listTitle="latest photos" posts={this.state.posts} />
        {/*<LoadMorePosts onLoadMoreClick={this.handleLoadMorePosts} /> feature toggle */}
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
      return <PostList listTitle="most viewed photos" posts={Posts.getAllSortedBy('most-viewed').slice(0,2)} />;
    }
    return null;
  }
});

var App = {
  init: function init() {
    React.render(<PostsContainer />, document.getElementById('home-page-posts'));
    React.render(<MostViewedPosts />, document.getElementById('most-viewed-posts'));
  }
};

module.exports = App;
