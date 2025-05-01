import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import Moment from 'react-moment';
import { Link } from 'react-router-dom';
import { deleteComment } from '../../actions/post';

const CommentItem = ({
  comment: { _id: commentId, text, name, avatar, user, date },
  postId,
}) => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  const onDelete = (postId, commentId) => {
    dispatch(deleteComment(postId, commentId));
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
        {!auth.loading && user === auth.user._id && (
          <button
            onClick={(e) => onDelete(postId, commentId)}
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

CommentItem.propTypes = {
  comment: PropTypes.object.isRequired,
  postId: PropTypes.string.isRequired,
};

export default CommentItem;
