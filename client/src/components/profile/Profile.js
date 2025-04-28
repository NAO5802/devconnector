import React, { Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProfileByUserId } from '../../actions/profile';
import { Link, useParams } from 'react-router-dom';
import { Spinner } from '../layout/Spinner';
import ProfileTop from './ProfileTop';
import ProfileAbout from './ProfileAbout';

const Profile = () => {
  const dispatch = useDispatch();
  const { userId } = useParams();
  const profile = useSelector((state) => state.profile.profile);
  const loading = useSelector((state) => state.profile.loading);
  const auth = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(getProfileByUserId(userId));
  }, [dispatch, userId]);

  const isMyProfile =
    auth.isAuthenticated &&
    auth.loading === false &&
    profile &&
    auth.user._id === profile.user._id;

  return (
    <Fragment>
      {profile === null || loading ? (
        <Spinner />
      ) : (
        <Fragment>
          <section className='container'>
            <Link to='/profiles' className='btn btn-light'>
              Back To Profiles
            </Link>
            {isMyProfile && (
              <Link to='/edit-profile' className='btn btn-dark'>
                Edit Profile
              </Link>
            )}
            <div className='profile-grid my-1'>
              <ProfileTop profile={profile} />
              <ProfileAbout profile={profile} />
            </div>
          </section>
        </Fragment>
      )}
    </Fragment>
  );
};

export default Profile;
