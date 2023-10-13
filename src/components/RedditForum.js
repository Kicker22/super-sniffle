import React, { Component } from 'react';

class RedditForum extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      newPostText: '',
      comments: {},
    };
  }

  handleNewPostChange = (event) => {
    this.setState({ newPostText: event.target.value });
  };

  handleAddPost = () => {
    const { newPostText, posts } = this.state;
    if (newPostText.trim() === '') return;

    const newPost = {
      id: posts.length + 1,
      text: newPostText,
      comments: [],
    };

    this.setState({
      posts: [newPost, ...posts],
      newPostText: '',
    });
  };

  handleAddComment = (postId, commentText) => {
    const { comments } = this.state;
    const newComment = {
      id: comments[postId] ? comments[postId].length + 1 : 1,
      text: commentText,
    };

    this.setState((prevState) => ({
      comments: {
        ...prevState.comments,
        [postId]: [...(prevState.comments[postId] || []), newComment],
      },
    }));
  };

  render() {
    const { posts, newPostText, comments } = this.state;

    return (
      <div className="reddit-forum">
        <h1>Reddit Forum</h1>
        <div className="new-post">
          <textarea
            placeholder="Enter your post..."
            value={newPostText}
            onChange={this.handleNewPostChange}
          />
          <button onClick={this.handleAddPost}>Post</button>
        </div>
        <div className="post-list">
          {posts.map((post) => (
            <div key={post.id} className="post">
              <p>{post.text}</p>
              <div className="comments">
                {comments[post.id] &&
                  comments[post.id].map((comment) => (
                    <div key={comment.id} className="comment">
                      {comment.text}
                    </div>
                  ))}
                <div className="new-comment">
                  <input
                    type="text"
                    placeholder="Add a comment..."
                    onKeyUp={(e) => {
                      if (e.key === 'Enter') {
                        this.handleAddComment(post.id, e.target.value);
                        e.target.value = '';
                      }
                    }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default RedditForum;