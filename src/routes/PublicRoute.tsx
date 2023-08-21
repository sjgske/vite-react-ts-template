import { Navigate } from 'react-router-dom';

interface Props {
  authenticated: boolean;
  redirect?: string;
  children: React.ReactNode;
}

const PublicRoute = ({ authenticated, redirect = '/', children }: Props) => {
  if (authenticated) return <Navigate to={redirect} replace />;

  return children;
};

export default PublicRoute;
