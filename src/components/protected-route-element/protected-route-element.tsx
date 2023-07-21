import { Navigate, useLocation } from 'react-router-dom';
import { useSelector } from '../../utils/hooks';
import { FC} from 'react';

type TProtectedRouteElementProps = {
  onlyGuest?: boolean;
  children: JSX.Element;
}
export const ProtectedRouteElement: FC<TProtectedRouteElementProps> = ({ onlyGuest = false, children }) => {
  const { isAuthChecked } = useSelector((store) => store.profileReducer);
  // const [isAuth, setIsAuth] = useState<boolean>(false);
  const location = useLocation();
  const { user } = useSelector((store) => store.profileReducer);

 /*  useEffect((): any => {
    if (!isAuthChecked) {
      return () => <p>Идет загрузка..</p>
    }
  }, [isAuthChecked]) */
  // setIsAuth(isAuthChecked);
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

