import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/postMessage';

const PostMessages = (props) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    props.fetchAll();
  }, [posts])

  return (<div>from PostMessages</div>);
}

const mapStateToProps = state => ({
  posts: state.posts
})

const mapActionsToProps = {
  fetchAll: actions.fetchAll
}

export default connect(mapStateToProps, mapActionsToProps)(PostMessages);