import PropTypes from 'prop-types';
import React from 'react';
import Moment from 'react-moment';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { addLike, deletePost, removeLike } from '../../actions/post';

const PostItem = ({
  post: { _id: postId, text, name, avatar, user, likes, comments, date },
}) => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  const onLike = (postId) => {
    dispatch(addLike(postId));
  };
  const onRemoveLike = (postId) => {
    dispatch(removeLike(postId));
  };

  const onDelete = (postId) => {
    dispatch(deletePost(postId));
  };

  return (
    <div className='post bg-white p-1 my-1'>
      <div>
        <Link to={`/profile/${user}`}>
          <img className='round-img' src={avatar} alt='' />
          <h4>{name}</h4>
        </Link>
      </div>
      <div>
        <p className='my-1'>{text}</p>
        <p className='post-date'>
          Posted on <Moment format='YYYY/MM/DD'>{date}</Moment>
        </p>
        <button
          onClick={(e) => onLike(postId)}
          type='button'
          className='btn btn-light'
        >
          <i className='fas fa-thumbs-up'></i>{' '}
          <span>{likes.length > 0 && <span>{likes.length}</span>}</span>
        </button>
        <button
          onClick={(e) => onRemoveLike(postId)}
          type='button'
          className='btn btn-light'
        >
          <i className='fas fa-thumbs-down'></i>
        </button>
        <Link to={`/post/${postId}`} className='btn btn-primary'>
          Discussion{' '}
          {comments.length > 0 && (
            <span className='comment-count'>{comments.length}</span>
          )}
        </Link>
        {!auth.loading && user === auth.user._id && (
          <button
            onClick={(e) => onDelete(postId)}
            type='button'
            className='btn btn-danger'
          >
            <i className='fas fa-times'></i>
          </button>
        )}
      </div>
    </div>
  );
};

PostItem.propTypes = {
  post: PropTypes.object.isRequired,
};

export default PostItem;
