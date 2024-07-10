import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  const isAuthenticated = localStorage.getItem('token'); // Or however you check authentication

  return isAuthenticated ? children : <Navigate to="/login" replace />;
}

export default PrivateRoute;