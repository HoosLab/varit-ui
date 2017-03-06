import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import Post from './Post';

class PostList extends Component {

  componentDidMount() {
    const { dispatch, fetchPosts } = this.props;
    this.fetchPosts = fetchPosts.bind(this);
  }

  render() {
    return (
      <div>
        <button onClick={() => this.fetchPosts()}>FETCH DATA</button>
        <Post/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    posts: []
  };
};

PostList = connect(mapStateToProps, {fetchPosts: actions.fetchPosts})(PostList);

export default PostList;