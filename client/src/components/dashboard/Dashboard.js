import React, { Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteAccount, getCurrentProfile } from '../../actions/profile';
import { Spinner } from '../layout/Spinner';
import { Link } from 'react-router-dom';
import Alert from '../layout/Alert';
import { DashboardActions } from './DashboardActions';
import { Experience } from './Experience';
import Education from './Education';

const Dashboard = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  const profileState = useSelector((state) => state.profile);

  useEffect(() => {
    dispatch(getCurrentProfile());
  }, [dispatch]);

  const onDeleteAccount = () => {
    if (!window.confirm('Are you sure? This can NOT be undone!')) {
      return;
    }
    dispatch(deleteAccount());
  };

  return profileState.loading && profileState.profile === null ? (
    <Spinner />
  ) : (
    <Fragment>
      <section className='container'>
        <Alert />
        <h1 className='large text-primary'>Dashboard</h1>
        <p className='lead'>
          <i className='fas fa-user'></i> Welcome {user && user.name}
        </p>
        {profileState.profile !== null ? (
          <Fragment>
            <DashboardActions />
            <Experience experiences={profileState.profile.experience} />
            <Education educations={profileState.profile.education} />
            <div className='my-2'>
              <button
                className='btn btn-danger'
                onClick={() => onDeleteAccount()}
              >
                <i className='fas fa-user-minus'></i> Delete My Account
              </button>
            </div>
          </Fragment>
        ) : (
          <Fragment>
            <p>You have not yet setup a profile, please add some info</p>
            <Link to='/create-profile' className='btn btn-primary my-1'>
              Create Profile
            </Link>
          </Fragment>
        )}
      </section>
    </Fragment>
  );
};

export default Dashboard;
