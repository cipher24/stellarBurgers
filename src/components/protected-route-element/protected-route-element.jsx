import {Route, Navigate, useLocation, Redirect} from 'react-router-dom';
import { useSelector } from 'react-redux';

export function ProtectedRouteElement({onlyGuest = false, children}) {
  const {isAuthChecked} = useSelector(store=>store.profileReducer);
  const location = useLocation();
  const { user } = useSelector(store=> store.profileReducer);
/* 
  if (!isAuthChecked) {
    return (
      <p> Идет проверка.. </p>
    )
  } */
  
  /* if (onlyGuest && user) {
    const { from } = location.state || { from: "/"};

    return <Navigate to={from} />
  } */

  /* if (!onlyGuest && !user) {
    console.log(user);
    return (  
        <Navigate to="/login" state={{from:location}} replace={true}/>
    )
    } */
  // return isSuccessLogin ? children : <Navigate to='/login' replace={true}/>
  return children;
}

//ДОБАВИТЬ ПРОПСЫ