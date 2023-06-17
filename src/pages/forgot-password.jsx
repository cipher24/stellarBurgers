import { EmailInput, PasswordInput, Button, Input } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './forgot-password.module.css';
import React, { useEffect } from 'react';
import { useNavigate, Navigate, Link } from 'react-router-dom';
import { forgotPasswordRequest } from '../services/actions/forgot-password';
import { requestNorma } from '../utils/burger-api';
import { useSelector, useDispatch } from 'react-redux';
import { resetPasswordInit } from '../services/actions/reset-password';

export function ForgotPasswordPage() {

  const [forgotInfo, setForgotInfo] = React.useState({
    email: 'mediumAndrew@yandex.ru'
  });
  const navigate = useNavigate();

  const { isExistedEmail } = useSelector(store => store.forgotPasswordReducer);
  const dispatch = useDispatch();

  const onChange = (e) => {
    setForgotInfo({
      [e.target.name]: e.target.value
    })
  };
  
  /* const onResetClick = () => {
    forgotPasswordRequest()
    .then(data => {
      if (data.success) {
        navigate('/reset-password')
      }
    })
  } */
  const onResetClick = async () => {
    dispatch(forgotPasswordRequest(forgotInfo));
    console.log(test);
    // if(isExistedEmail) navigate('/reset-password');
    // dispatch()
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(forgotPasswordRequest(forgotInfo));
  }
  /* const onResetClick = () => {
    fetch('https://norma.nomoreparties.space/api/password-reset', {
      method: "POST",
      body: JSON.stringify({
        email: 'mediumAndrew@yandex.ru'
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
    .then((response) => { return response.ok ? response.json() : response.json().then(e => Promise.reject(e)) } )
    .then((data) => {
      console.log(data);
      if (data.success) {
       navigate('/reset-password')
      }
    })
  } */
  useEffect(()=> {
    if (isExistedEmail) {
      dispatch(resetPasswordInit());
      navigate('/reset-password', {replace: true});
    }
  },[isExistedEmail])

  return (
    <>
      <div className={styles.container}>
        {/* {isExistedEmail && <Navigate to="/reset-password"/>} */}
        <form className={styles.form} onSubmit={handleSubmit}>
          <p className='text text_type_main-medium mb-6'> Восстановление пароля </p>
          <EmailInput
            placeholder="Укажите e-mail"
            onChange={onChange}
            value={forgotInfo.email}
            name={'email'}
          ></EmailInput>
          <Button
            htmlType="submit"
            type="primary"
            size="medium"
            extraClass="mb-20 mt-6"
          >
            Восстановить
          </Button>
        </form>
        <div className="text text_type_main-default text_color_inactive mb-4">
          Вспомнили пароль? 
          <Link
            to="/login"
            className={` ${styles.links} ml-2`}
            >
            Войти
          </Link>
        </div>

      </div>
    </>
  )
}