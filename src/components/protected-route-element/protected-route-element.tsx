import { Navigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect, FC } from 'react';

type TProtectedRouteElementProps = {
  onlyGuest?: boolean;
  children: JSX.Element;
}
export const ProtectedRouteElement: FC<TProtectedRouteElementProps> = ({ onlyGuest = false, children }) => {
  const { isAuthChecked } = useSelector((store: any) => store.profileReducer);
  const location = useLocation();
  const { user } = useSelector((store: any) => store.profileReducer);

  useEffect((): any => {
    if (!isAuthChecked) {
      return () => <p>Идет загрузка..</p>
    }
  }, [isAuthChecked])

  if (onlyGuest && user) {
    console.log('Пользователь авторозирован');
    const { from } = location.state || { from: '/' };
    return (
      <Navigate to={from} />
    )
  }

  if (!onlyGuest && !user) {
    console.log('Пользователь не авторозирован');
    return (
      <Navigate to="/login" state={{ from: location }} />
    )
  }

  return children;
}

