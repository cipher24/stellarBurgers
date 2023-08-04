import { Navigate, useLocation } from 'react-router-dom';
import { useSelector } from '../../utils/hooks';
import { FC } from 'react';
import { profile } from '../../selectors/selectors';

type TProtectedRouteElementProps = {
  onlyGuest?: boolean;
  children: JSX.Element;
}
export const ProtectedRouteElement: FC<TProtectedRouteElementProps> = ({ onlyGuest = false, children }) => {
  const location = useLocation();
  const { user, isAuthChecked } = useSelector(profile);

  if (!isAuthChecked) {
    return (<p>Идет загрузка..</p>)
  }

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

