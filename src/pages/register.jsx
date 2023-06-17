import { EmailInput, PasswordInput, Button, Input } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './register.module.css';
import { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { registerRequest,registerInit } from '../services/actions/register';

export function RegisterPage() {
  const dispatch = useDispatch();
  // const [isError, setIsError] = React.useState(false);
  const [registerData, setRegisterData] = useState({
    email: '',
    password: '',
    name: ''
  });
  const { isSuccessRegistration } = useSelector(store => store.registerReducer);
  // const navigate = useNavigate();
  const onChange = (e) => {
    setRegisterData({
      ...registerData,
      [e.target.name]: e.target.value
    })
  }
  /* const onLoginClick = () => {
    navigate('/login');
  } */
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('sending:', registerData);
    dispatch(registerRequest(registerData));
  }
  /* const onError = () => {
    setIsError(true)
  } */
  // localStorage.setItem('test', '236344');
  useEffect(() => {
    if (isSuccessRegistration) {
      setRegisterData({
        email: '',
        password: '',
        name: ''
      })
    }
    
  }, [isSuccessRegistration])
  return (
    <>
      <div className={styles.container}>
        <form className={styles.form} onSubmit={handleSubmit}>
          <p className='text text_type_main-medium mb-6'> Регистрация </p>
          <Input
            value={registerData.name}
            onChange={onChange}
            name={'name'}
            type={'text'}
            placeholder={'Имя'}
            extraClass="mb-6"
          ></Input>
          <EmailInput
            value={registerData.email}
            name={'email'}
            onChange={onChange}
            extraClass="mb-6"
          ></EmailInput>
          <PasswordInput
            value={registerData.password}
            name={'password'}
            onChange={onChange}
          ></PasswordInput>
          <Button
            htmlType="submit"
            type="primary"
            size="medium"
            extraClass="mt-6"
          >
            Зарегистрироваться
          </Button>
        </form>
        {isSuccessRegistration && <p className='text text_type_main-default'> Успешная регистрация!</p>}
        <div className="text text_type_main-default text_color_inactive mt-20 mb-4">
          Уже зарегистрированы?
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