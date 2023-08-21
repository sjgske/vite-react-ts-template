import { Navigate } from 'react-router-dom';

interface Props {
  authenticated: boolean;
  redirect?: string;
  children: React.ReactNode;
}

const PrivateRoute = ({
  authenticated,
  redirect = '/login',
  children,
}: Props) => {
  if (!authenticated) return <Navigate to={redirect} replace />;

  return children;
};

export default PrivateRoute;
