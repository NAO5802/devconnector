import React, { Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPost } from '../../actions/post';
import { Link, useParams } from 'react-router-dom';
import Alert from '../layout/Alert';
import { Spinner } from '../layout/Spinner';
import PostItem from '../posts/PostItem';
import CommentForm from './CommentForm';
import CommentItem from './CommentItem';

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
        <div className='comments'>
          {post.comments.map((comment) => (
            <CommentItem key={comment._id} comment={comment} postId={postId} />
          ))}
        </div>
      </section>
      ;
    </Fragment>
  );
};

export default Post;
