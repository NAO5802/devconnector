import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCurrentProfile } from '../../actions/profile';
import Alert from '../layout/Alert';

const Dashboard = () => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const profile = useSelector((state) => state.profile);

  useEffect(() => {
    dispatch(getCurrentProfile());
  }, []);

  return <div className='container'>Dashboard</div>;
};

export default Dashboard;
