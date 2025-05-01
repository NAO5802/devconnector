import React, { Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPosts } from '../../actions/post';
import { Spinner } from '../layout/Spinner';
import PostItem from './PostItem';
import Alert from './../layout/Alert';
import { PostForm } from './PostForm';

export const Posts = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.post.posts);
  const loading = useSelector((state) => state.post.loading);

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <section className='container'>
      <Alert />
      {loading ? (
        <Spinner />
      ) : (
        <Fragment>
          <h1 className='large text-primary'>Posts</h1>
          <p className='lead'>
            <i className='fas fa-user'></i> Welcome to the community!
          </p>
          <PostForm />
          <div className='posts'>
            {posts.map((post) => (
              <PostItem
                key={post._id}
                post={post}
                showActions={true}
              ></PostItem>
            ))}
          </div>
        </Fragment>
      )}
    </section>
  );
};
