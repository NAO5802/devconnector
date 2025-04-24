import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import { useDispatch } from 'react-redux';
import { deleteEducation } from '../../actions/profile';

const Education = ({ educations }) => {
  const dispatch = useDispatch();
  const onDelete = (education_id) => {
    dispatch(deleteEducation(education_id));
  };

  const educationList = educations.map((education) => (
    <tr key={education._id}>
      <td>{education.school}</td>
      <td className='hide-sm'>{education.degree}</td>
      <td className='hide-sm'>
        <Moment format='YYYY/MM/DD'>{education.from}</Moment> -{' '}
        {education.to === null ? (
          ' Now'
        ) : (
          <Moment format='YYYY/MM/DD'>{education.to}</Moment>
        )}
      </td>
      <td>
        <button
          className='btn btn-danger'
          onClick={() => onDelete(education._id)}
        >
          Delete
        </button>
      </td>
    </tr>
  ));

  return (
    <Fragment>
      <h2 className='my-2'>Education Credentials</h2>
      <table className='table'>
        <thead>
          <tr>
            <th>School</th>
            <th className='hide-sm'>Degree</th>
            <th className='hide-sm'>Years</th>
            <th />
          </tr>
        </thead>
        <tbody>{educationList}</tbody>
      </table>
    </Fragment>
  );
};

Education.propTypes = {
  educations: PropTypes.array.isRequired,
};

export default Education;
