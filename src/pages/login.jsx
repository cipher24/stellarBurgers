import { EmailInput, PasswordInput, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './login.module.css';
import { useNavigate, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginRequest } from '../services/actions/login';
import { forgotPasswordInit } from '../services/actions/forgot-password';

export function LoginPage() {
  const [loginData, setLoginData] = useState({
    email: 'mediumAndrew@yandex.ru',
    password: 'burger234'
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {isSuccessLogin} = useSelector(store=> store.loginReducer);

  const onForgotPasswordClick = () => {
    dispatch(forgotPasswordInit());
  }
  const onChange = (e) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value
    })
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginRequest(loginData))
  }

  useEffect (()=> {
    if (isSuccessLogin)  {
      navigate('/', {replace: true});
    }
  },[isSuccessLogin]);
  
  return (
    <>
      <div className={styles.container}>

        <form className={styles.form} onSubmit={handleSubmit}>
          <p className='text text_type_main-medium mb-6'> Вход</p>
          <EmailInput
            onChange={onChange}
            value={loginData.email}
            name={'email'}
            placeholder="Логин"
            extraClass="mb-6"
          ></EmailInput>
          <PasswordInput
            onChange={onChange}
            value={loginData.password}
            name={'password'}
          ></PasswordInput>
          <Button
            htmlType="submit"
            type="primary"
            size="medium"
            extraClass="mb-20 mt-6"
          >
            Войти
          </Button>
        </form>
        <div className="text text_type_main-default text_color_inactive mb-4">
          Вы - новый пользователь?
          <Link
            to="/register"
            className={` ${styles.links} ml-2`}
          >
            Зарегистрироваться
          </Link>
        </div>
        <p className="text text_type_main-default text_color_inactive" >
          Забыли пароль?
          <Link
            to="/forgot-password"
            className={` ${styles.links} ml-2`}
            onClick={onForgotPasswordClick}
          >
            Восстановить пароль
          </Link>
        </p>
      </div>
    </>
  )
}