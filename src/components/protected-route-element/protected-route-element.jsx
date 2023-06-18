import {Navigate, useLocation} from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import PropTypes from 'prop-types';

export function ProtectedRouteElement({onlyGuest = false, children}) {
  const {isAuthChecked} = useSelector(store=>store.profileReducer);
  const location = useLocation();
  const { user } = useSelector(store => store.profileReducer);

  useEffect(()=>{
    if (!isAuthChecked) return () => <p>Идет загрузка..</p>
  },[isAuthChecked])

  if (onlyGuest && user) {
    console.log('Пользователь авторозирован');
    const {from} = location.state || {from: '/'};
    return (
      <Navigate to={from} />
    )
  }

  if (!onlyGuest && !user) {
    console.log('Пользователь не авторозирован');
    return (  
        <Navigate to="/login" state={{ from: location}} />
    )
    }

  return children;
}

ProtectedRouteElement.propTypes = {
  onlyGuest: PropTypes.bool,
  children: PropTypes.element.isRequired
}