import { Button, Input } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './reset-password.module.css';
import {useState, useEffect} from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { resetPasswordRequest } from '../services/actions/reset-password';


export function ResetPasswordPage() {

  const [resetInfo, setResetInfo] = useState({
    password: '',
    token: ''
  })
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {isSuccessReset} = useSelector(store=>store.resetPasswordReducer);
  const {isExistedEmail} = useSelector(store=>store.forgotPasswordReducer);

  const onChange = (e) => {
    setResetInfo({
      ...resetInfo,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('sending:', resetInfo)
    dispatch(resetPasswordRequest(resetInfo))
  }

  useEffect(()=>{
    if (!isExistedEmail) {
      navigate('/forgot-password');
      return () => {}
    }
  },[isExistedEmail]);

  useEffect(()=>{
    if (isSuccessReset) {
      setResetInfo({
        password: '',
        token: ''
      })
    }
  },[isSuccessReset])
  return (
    <>
      <div className={styles.container}>

        <form className={styles.form} onSubmit={handleSubmit}>
          <p className='text text_type_main-medium mb-6'> Восстановление пароля </p>
          <Input
            value={resetInfo.password}
            onChange={onChange}
            name={'password'}
            type={'text'}
            placeholder={'Введите новый пароль'}
            icon={'ShowIcon'}
            extraClass="mb-6">
          </Input>
          <Input
            value={resetInfo.token}
            onChange={onChange}
            name={'token'}
            type={'text'}
            placeholder={'Введите код из письма'}
            extraClass="mb-6">
          </Input>
        <Button htmlType="submit" type="primary" size="medium" extraClass=" mt-6" > Сохранить </Button>
        </form>
        {isSuccessReset && <p className='text text_type_main-default'>Пароль успешно изменен!</p>}
        <div className={`text text_type_main-default text_color_inactive mt-20 mb-4`}>
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