import AppHeader from '../app-header/app-header';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import BurgerConstructor from '../burger-constructor/burger-constructor';
import styles from './app.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { getIngredientsRequest } from '../../services/actions/burger-ingredients';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { useEffect } from 'react';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import { ProtectedRouteElement } from '../protected-route-element/protected-route-element';
import { checkAuthorization } from '../../services/actions/profile';
import {
  LoginPage,
  RegisterPage,
  ForgotPasswordPage,
  ResetPasswordPage,
  ProfilePage,
  OrdersPage,
  NotFound404
} from '../../pages';
export default function App() {
  const location = useLocation();
  // const background = location.state && location.state.background;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getIngredientsRequest());
    // dispatch(checkAuthorization());
  }, [dispatch, getIngredientsRequest, checkAuthorization]);

  const data = useSelector(store => store.burgerIngredientsReducer.ingredients);

  function Main() {
    return <main className={styles.main} >
      {data.length > 0 &&
        <DndProvider backend={HTML5Backend}>
          <BurgerIngredients />
          <BurgerConstructor />
        </DndProvider>
      }
    </main>
  }

  return (
    <>

      <AppHeader />
      <Routes
      // location={background || location}
      >
        <Route path='/' element={<Main />} />
        <Route path='/login' element={
          <ProtectedRouteElement onlyGuest={true}>
            <LoginPage />
          </ProtectedRouteElement>
        } />
        <Route path='/register' element={
          <ProtectedRouteElement onlyGuest={true}>
            <RegisterPage />
          </ProtectedRouteElement>
        } />
        <Route path='/forgot-password' element={
          <ProtectedRouteElement onlyGuest={true}>
            <ForgotPasswordPage />
          </ProtectedRouteElement>
        } />
        <Route path='/reset-password' element={
          <ProtectedRouteElement onlyGuest={true}>
            <ResetPasswordPage />
          </ProtectedRouteElement>
        } />
        <Route path='/profile' element={
          <ProtectedRouteElement>
            <ProfilePage />
          </ProtectedRouteElement>
        } />
        <Route path='/profile/orders' element={
          <ProtectedRouteElement >
            <OrdersPage />
          </ProtectedRouteElement>
        } />
        <Route path='*' element={<NotFound404 />} />
      </Routes>

    </>
  )
}
