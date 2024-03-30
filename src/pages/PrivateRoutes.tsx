import { Navigate } from 'react-router-dom';
import DashboardLayout from './Dashboard/DashboardLayout';

import { RootState } from '../redux';
import { useSelector } from 'react-redux';

const PrivateRoutes = () => {
  const user = useSelector((user: RootState) => user.user);
  {
    console.log(user, 'userrrrrsss');
  }
  return user.user.token ? <DashboardLayout /> : <Navigate to="/login" />;
};

export default PrivateRoutes;
