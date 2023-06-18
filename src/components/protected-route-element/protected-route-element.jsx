import {Navigate, useLocation} from 'react-router-dom';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

export function ProtectedRouteElement({onlyGuest = false, children}) {
  const {isAuthChecked} = useSelector(store=>store.profileReducer);
  const location = useLocation();
  const { user } = useSelector(store => store.profileReducer);

  if (onlyGuest && user) {
    console.log('Пользователь авторозирован');
    return (
      <Navigate to='/' />
    )
  }

  if (!onlyGuest && !user) {
    console.log('Пользователь не авторозирован');
    return (  
        <Navigate to="/login" />
    )
    }

  return children;
}

ProtectedRouteElement.propTypes = {
  onlyGuest: PropTypes.bool,
  children: PropTypes.element.isRequired
}