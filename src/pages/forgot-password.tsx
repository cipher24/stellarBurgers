import { EmailInput, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './forgot-password.module.css';
import { useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { forgotPasswordRequest } from '../services/actions/forgot-password';
import { useSelector, useDispatch } from '../utils/hooks';
import { resetPasswordInit } from '../services/actions/reset-password';
import { useForm } from '../hooks/use-form';

export function ForgotPasswordPage() {

  const { values, handleChange, setValues } = useForm({
    email: ''
  });

  const { isExistedEmail } = useSelector((store) => store.forgotPasswordReducer);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    dispatch(forgotPasswordRequest(values));
  }

  useEffect(() => {
    if (isExistedEmail) {
      dispatch(resetPasswordInit());
      navigate('/reset-password', { replace: true });
    }
  }, [isExistedEmail])

  return (
    <>
      <div className={styles.container}>
        <form className={styles.form} onSubmit={handleSubmit}>
          <p className='text text_type_main-medium mb-6'> Восстановление пароля </p>
          <EmailInput
            placeholder="Укажите e-mail"
            onChange={handleChange}
            value={values.email}
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