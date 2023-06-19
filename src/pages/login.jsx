import { EmailInput, PasswordInput, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './login.module.css';
import { Link } from 'react-router-dom';
import { useDispatch} from 'react-redux';
import { loginRequest } from '../services/actions/login';
import { forgotPasswordInit } from '../services/actions/forgot-password';
import {useForm} from '../hooks/use-form';

export function LoginPage() {

  const {values, handleChange, setValues} = useForm({
    email: '',
    password: ''
  });
  const dispatch = useDispatch();

  const onForgotPasswordClick = () => {
    dispatch(forgotPasswordInit());
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginRequest(values))
  }
  
  return (
    <>
      <div className={styles.container}>

        <form className={styles.form} onSubmit={handleSubmit}>
          <p className='text text_type_main-medium mb-6'> Вход</p>
          <EmailInput
            onChange={handleChange}
            value={values.email}
            name={'email'}
            placeholder="Логин"
            extraClass="mb-6"
          ></EmailInput>
          <PasswordInput
            onChange={handleChange}
            value={values.password}
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