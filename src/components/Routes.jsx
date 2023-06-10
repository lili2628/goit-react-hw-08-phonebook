import { Navigate } from 'react-router-dom';
import useAuth from 'hooks';


export function PrivateRoute({component: Component, redirectTo = '/'}) {
  const { isLoggedIn, isRefreshing } = useAuth();
  const shouldRedirect = !isLoggedIn && !isRefreshing;
  
  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
}

export function RestrictedRoute({component: Component, redirectTo = '/'}) {
  const {isLoggedIn} = useAuth();

  return isLoggedIn ? <Navigate to={redirectTo} /> : Component;
}