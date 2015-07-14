var Post = React.createClass({
  render: function() {
    return (
      <article>
        <p>{this.props.post.location}</p>
        <p>
          <time pubdate='{this.props.post.pubdate}'>
            {this.props.post.pubdate.month}<span>{this.props.post.pubdate.day}</span>
          </time>
        </p>
        <header>
          <h1>{this.props.post.title}</h1>
          <p>{this.props.post.description}</p>
        </header>
      </article>
    );
  }
});
