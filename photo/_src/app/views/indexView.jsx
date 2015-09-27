"use strict";

var Posts = require('model/post');
var PostList = require('./postList');

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

var PostsContainer = React.createClass({
  getInitialState: function() {
    return {
      sortBy: 'latest',
      posts: Posts.getAllSortedBy('latest')
    };
  },

  handleSortingChange: function(sortOption) {
    this.setState({
      sortBy: sortOption,
      posts: Posts.getAllSortedBy(sortOption)
    });
  },

  render: function() {
    return (
      <section className='posts-container'>
        <SortingOptions sortBy={this.state.sortBy} onSortingChange={this.handleSortingChange} />
        <PostList posts={this.state.posts} />
      </section>
    );
  }
});

var App = {
  init: function init() {
    React.render(<PostsContainer />, document.getElementById('home-page-posts'));
  }
};

module.exports = App;
