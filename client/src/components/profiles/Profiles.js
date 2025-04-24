import React, { Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProfiles } from '../../actions/profile';
import { Spinner } from '../layout/Spinner';
import ProfileItem from './ProfileItem';

const Profiles = () => {
  const dispatch = useDispatch();
  const profiles = useSelector((state) => state.profile.profiles);
  const loading = useSelector((state) => state.profile.loading);

  useEffect(() => {
    dispatch(getProfiles());
  }, []);

  const profileItems = profiles.map((profile) => (
    <ProfileItem key={profile._id} profile={profile} />
  ));

  return (
    <Fragment>
      {loading ? (
        <Spinner />
      ) : (
        <Fragment>
          <section className='container'>
            <h1 className='large text-primary'>Developers</h1>
            <p className='lead'>
              <i className='fab fa-connectdevelop'></i> Browse and connect with
              developers
            </p>
            <div className='profiles'>
              {profiles.length > 0 ? (
                profileItems
              ) : (
                <h4>No profiles found...</h4>
              )}
            </div>
          </section>
        </Fragment>
      )}
    </Fragment>
  );
};

export default Profiles;
