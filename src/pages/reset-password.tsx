import { Button, Input } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './reset-password.module.css';
import { useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';

import { useSelector, useDispatch } from '../utils/hooks';
import { resetPasswordRequest } from '../services/actions/reset-password';
import { useForm } from '../hooks/use-form';
import { forgotPassword, resetPassword } from '../selectors/selectors';

export function ResetPasswordPage() {

  const { values, handleChange, setValues } = useForm({
    password: '',
    token: ''
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isSuccessReset } = useSelector(resetPassword);
  const { isExistedEmail } = useSelector(forgotPassword);

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    console.log('sending:', values)
    dispatch(resetPasswordRequest(values))
  }

  useEffect(() => {
    if (!isExistedEmail) {
      navigate('/forgot-password');
      return () => { }
    }
  }, [isExistedEmail]);

  useEffect(() => {
    if (isSuccessReset) {
      setValues({
        password: '',
        token: ''
      })
    }
  }, [isSuccessReset])
  return (
    <>
      <div className={styles.container}>

        <form className={styles.form} onSubmit={handleSubmit}>
          <p className='text text_type_main-medium mb-6'> Восстановление пароля </p>
          <Input
            value={values.password}
            onChange={handleChange}
            name={'password'}
            type={'text'}
            placeholder={'Введите новый пароль'}
            icon={'ShowIcon'}
            extraClass="mb-6">
          </Input>
          <Input
            value={values.token}
            onChange={handleChange}
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