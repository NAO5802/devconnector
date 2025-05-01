import React, { Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPost } from '../../actions/post';
import { Link, useParams } from 'react-router-dom';
import Alert from '../layout/Alert';
import { Spinner } from '../layout/Spinner';
import PostItem from '../posts/PostItem';
import CommentForm from './CommentForm';

const Post = (props) => {
  const dispatch = useDispatch();
  const post = useSelector((state) => state.post.post);
  const loading = useSelector((state) => state.post.loading);
  const { postId } = useParams();

  useEffect(() => {
    dispatch(getPost(postId));
  }, [dispatch, postId]);

  return loading || post === null ? (
    <Spinner />
  ) : (
    <Fragment>
      <section className='container'>
        <Alert />
        <Link to='/posts' className='btn'>
          Back To Posts
        </Link>
        <PostItem post={post} showActions={false} />
        <CommentForm postId={postId} />
      </section>
      ;
    </Fragment>
  );
};

export default Post;
